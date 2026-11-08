@echo off
chcp 65001 >nul
setlocal
set "CARTOON_BOOKS_LAUNCHER=%~f0"
set "CARTOON_BOOKS_ACTION=%~1"
powershell -NoProfile -Command "$parts = (Get-Content -LiteralPath $env:CARTOON_BOOKS_LAUNCHER -Raw -Encoding UTF8) -split '(?m)^# POWERSHELL START\r?$'; & ([ScriptBlock]::Create($parts[1]))"
exit /b %errorlevel%

# POWERSHELL START
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding
$projectDir = Split-Path -Parent $env:CARTOON_BOOKS_LAUNCHER
$serverPath = Join-Path $projectDir 'server.js'
$config = Get-Content -LiteralPath (Join-Path $projectDir 'config.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$portValue = if ($env:PORT) { $env:PORT } elseif ($config.port) { $config.port } else { 3000 }
$listenPort = 0
if (-not [int]::TryParse([string]$portValue, [ref]$listenPort) -or $listenPort -lt 1 -or $listenPort -gt 65535) {
    throw '端口必须是 1 到 65535 之间的整数，请检查配置和 PORT 环境变量'
}
$node = Get-Command node -CommandType Application -ErrorAction Stop
$siteUrl = 'http://localhost:{0}' -f $listenPort
$absolutePattern = '(?i)(?:^|\s)"?' + [regex]::Escape($serverPath) + '"?(?=\s|$)'

function Test-BookProcess($process) {
    if ($process.Name -ne 'node.exe') { return $false }
    $commandLine = $process.CommandLine -replace '/', '\'
    if ($commandLine -match $absolutePattern) { return $true }
    if ($commandLine -notmatch '(?i)(?:^|\s)"?server\.js"?(?=\s|$)') { return $false }
    # 旧启动器使用相对路径，需核对所服务的首页才能确认属于本项目。
    try {
        $page = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 3
        $expected = Get-Content -LiteralPath (Join-Path $projectDir 'index.html') -Raw -Encoding UTF8
        return [string]::Equals([string]$page.Content, $expected, [StringComparison]::Ordinal)
    } catch {
        return $false
    }
}

function Get-BookServerState {
    $owners = @(Get-NetTCPConnection -LocalPort $listenPort -State Listen -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty OwningProcess -Unique)
    if (-not $owners.Count) { return @{ Kind = 'Stopped'; Processes = @() } }
    $processes = @()
    foreach ($ownerId in $owners) {
        $process = Get-CimInstance Win32_Process -Filter ('ProcessId = {0}' -f $ownerId)
        if (-not $process -or -not (Test-BookProcess $process)) {
            return @{ Kind = 'Occupied'; Processes = @(); Owners = $owners }
        }
        $processes += $process
    }
    return @{ Kind = 'Running'; Processes = $processes }
}

function Start-BookServer {
    $state = Get-BookServerState
    if ($state.Kind -eq 'Occupied') {
        throw ('端口 {0} 被其他进程占用（PID: {1}），未启动或停止任何进程' -f $listenPort, ($state.Owners -join ', '))
    }
    if ($state.Kind -eq 'Stopped') {
        $child = Start-Process -FilePath $node.Source -ArgumentList ('"{0}"' -f $serverPath) -WorkingDirectory $projectDir -PassThru
        $watch = [Diagnostics.Stopwatch]::StartNew()
        do {
            $child.Refresh()
            if ($child.HasExited) { throw '服务启动失败，请查看服务窗口中的错误信息' }
            $state = Get-BookServerState
            if ($state.Kind -eq 'Running') { break }
            if ($state.Kind -eq 'Occupied') { throw ('端口 {0} 已被其他进程占用' -f $listenPort) }
            Start-Sleep -Milliseconds 200
        } while ($watch.Elapsed.TotalSeconds -lt 10)
        if ($state.Kind -ne 'Running') { throw '服务未在 10 秒内就绪，请检查服务窗口' }
        Write-Host ('服务已启动：{0}' -f $siteUrl)
    } else {
        Write-Host ('服务已在运行，直接打开：{0}' -f $siteUrl)
    }
    Start-Process -FilePath $siteUrl
}

function Stop-BookServer {
    $state = Get-BookServerState
    if ($state.Kind -eq 'Occupied') {
        throw ('端口 {0} 不属于本项目，未停止任何进程' -f $listenPort)
    }
    if ($state.Kind -eq 'Stopped') {
        Write-Host '服务未运行'
        return
    }
    foreach ($process in $state.Processes) {
        $current = Get-CimInstance Win32_Process -Filter ('ProcessId = {0}' -f $process.ProcessId)
        if (-not $current) { continue }
        if ($current.CreationDate -ne $process.CreationDate -or -not (Test-BookProcess $current)) {
            throw '进程状态已变化，未执行停止操作，请重试'
        }
        Stop-Process -Id $current.ProcessId -ErrorAction Stop
    }
    Write-Host '本项目服务已停止，其他 Node.js 程序不受影响'
}

function Invoke-LauncherAction($action) {
    switch ($action) {
        'start' { Start-BookServer }
        'restart' { Stop-BookServer; Start-BookServer }
        'stop' { Stop-BookServer }
        'status' {
            $state = Get-BookServerState
            Write-Host ('{0} port={1} PID={2}' -f $state.Kind, $listenPort, (($state.Processes | ForEach-Object { $_.ProcessId }) -join ','))
        }
        'scan' {
            $python = Get-Command python -CommandType Application -ErrorAction Stop
            Push-Location -LiteralPath $projectDir
            try {
                & $python.Source (Join-Path $projectDir 'scanner.py')
                if ($LASTEXITCODE -ne 0) { throw '扫描失败，请检查媒体目录配置' }
            } finally {
                Pop-Location
            }
        }
        'open' { Start-Process -FilePath $siteUrl }
        'books' {
            if (-not $config.booksDir -or -not (Test-Path -LiteralPath $config.booksDir -PathType Container)) { throw '绘本目录不存在，请检查配置' }
            Start-Process explorer.exe -ArgumentList ('"{0}"' -f $config.booksDir)
        }
        'videos' {
            if (-not $config.videosDir -or -not (Test-Path -LiteralPath $config.videosDir -PathType Container)) { throw '视频目录不存在，请检查配置' }
            Start-Process explorer.exe -ArgumentList ('"{0}"' -f $config.videosDir)
        }
        default { throw ('未知操作：{0}' -f $action) }
    }
}

if ($env:CARTOON_BOOKS_ACTION) {
    try {
        Invoke-LauncherAction $env:CARTOON_BOOKS_ACTION
        exit 0
    } catch {
        Write-Host ('[错误] {0}' -f $_.Exception.Message) -ForegroundColor Red
        if ($env:CARTOON_BOOKS_ACTION -eq 'start') { Read-Host '按回车关闭' | Out-Null }
        exit 1
    }
}

while ($true) {
    Clear-Host
    Write-Host '阅读世界 - 绘本与视频'
    Write-Host ('项目目录：{0}' -f $projectDir)
    Write-Host ('绘本目录：{0}' -f $config.booksDir)
    Write-Host ('视频目录：{0}' -f $config.videosDir)
    Write-Host ('访问地址：{0}' -f $siteUrl)
    Write-Host ''
    Write-Host '[1] 启动服务并打开浏览器'
    Write-Host '[2] 重启本项目服务'
    Write-Host '[3] 停止本项目服务'
    Write-Host '[4] 扫描/更新数据'
    Write-Host '[5] 打开浏览器'
    Write-Host '[6] 打开绘本目录'
    Write-Host '[7] 打开视频目录'
    Write-Host '[Q] 退出启动器（服务继续运行）'
    $choice = Read-Host '请选择操作'
    if ($choice -eq 'q') { exit 0 }
    $actions = @{ '1' = 'start'; '2' = 'restart'; '3' = 'stop'; '4' = 'scan'; '5' = 'open'; '6' = 'books'; '7' = 'videos' }
    try {
        if (-not $actions.ContainsKey($choice)) { throw '无效选项' }
        Invoke-LauncherAction $actions[$choice]
    } catch {
        Write-Host ('[错误] {0}' -f $_.Exception.Message) -ForegroundColor Red
    }
    Read-Host '按回车返回菜单' | Out-Null
}
