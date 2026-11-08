@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "PORT=8091"

echo ====================================
echo 绘本服务器（先结束旧进程再启动）
echo ====================================
echo.
echo 端口: %PORT%
echo 绘本目录: D:\绘本
echo 工作目录: %cd%
echo.
echo 浏览器访问: http://localhost:%PORT%
echo 按 Ctrl+C 可停止服务器
echo ====================================
echo.

REM 结束占用该端口的旧进程（需与 server.py 中 PORT 一致）
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue; Write-Host ('已结束占用端口 %PORT% 的进程 PID ' + $_.OwningProcess) }"

timeout /t 1 /nobreak >nul

py server.py

if errorlevel 1 (
    echo.
    echo 启动失败！请检查 Python 是否已安装，或查看上方报错。
    pause
)
