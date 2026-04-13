@echo off
chcp 65001 > nul
title 绘本世界 - 启动器

setlocal enabledelayedexpansion

set "PROJECT_DIR=%~dp0"

:: ════════════════════════════════════════
:: ⚙️ 从 config.json 读取配置（只需改这一个文件）
:: ════════════════════════════════════════
for /f "delims=" %%i in ('powershell -NoProfile -Command "(Get-Content '%~dp0config.json' | ConvertFrom-Json).booksDir"') do set "BOOKS_DIR=%%i"
set "PORT=3000"

:: 检测 Python 和 Node.js
where python >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Python，请先安装 Python 3
    pause
    exit /b 1
)

where node >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js
    pause
    exit /b 1
)

:menu
cls
echo ╔════════════════════════════════════════════╗
echo ║                                            ║
echo ║     📖 绘本世界 - Picture Book World       ║
echo ║                                            ║
echo ╚════════════════════════════════════════════╝
echo.
echo ┌────────────────────────────────────────────┐
echo │  配置信息                                   │
echo ├────────────────────────────────────────────┤
echo │  项目位置: %PROJECT_DIR%│
echo │  绘本目录: %BOOKS_DIR%                      │
echo │  访问地址: http://localhost:%PORT%          │
echo └────────────────────────────────────────────┘
echo.
echo   [1] 启动服务（并打开浏览器）
echo   [2] 重启服务（并打开浏览器）
echo   [3] 停止服务
echo.
echo   [4] 扫描/更新数据（添加新绘本后使用）
echo   [5] 打开浏览器访问网站
echo   [6] 打开绘本文件夹
echo.
echo   [Q] 退出
echo.

set /p choice=请选择操作:

if "!choice!"=="1" goto start_server
if "!choice!"=="2" goto restart_server
if "!choice!"=="3" goto stop_server
if "!choice!"=="4" goto scan_data
if "!choice!"=="5" goto open_browser
if "!choice!"=="6" goto open_folder
if /i "!choice!"=="Q" goto end

echo.
echo 无效选项，按回车重试...
pause > nul
goto menu

:start_server
echo.
echo ┌─ 启动服务 ───────────────────────────────┐
cd /d "%PROJECT_DIR%"
start "绘本世界" cmd /c "node server.js && pause"
timeout /t 3 > nul

netstat -ano | findstr ":%PORT%" | findstr "LISTENING" > nul 2>&1
if errorlevel 1 (
    echo │ ⚠️  服务可能未完全启动                     │
) else (
    echo │ ✅ 服务已成功启动                         │
)

start http://localhost:%PORT%
echo │ 🌐 已自动打开浏览器                        │
echo └────────────────────────────────────────────┘
echo.
set /p dummy=按回车返回主菜单...
goto menu

:restart_server
echo.
echo ┌─ 重启服务 ───────────────────────────────┐
echo │ 正在停止旧服务...                          │
taskkill /f /im node.exe >nul 2>&1
timeout /t 1 > nul

echo │ 正在启动新服务...                          │
cd /d "%PROJECT_DIR%"
start "绘本世界" cmd /c "node server.js && pause"
timeout /t 3 > nul

netstat -ano | findstr ":%PORT%" | findstr "LISTENING" > nul 2>&1
if errorlevel 1 (
    echo │ ⚠️  服务可能未完全启动                     │
) else (
    echo │ ✅ 服务已成功重启                         │
)

start http://localhost:%PORT%
echo │ 🌐 已自动打开浏览器                        │
echo └────────────────────────────────────────────┘
echo.
set /p dummy=按回车返回主菜单...
goto menu

:stop_server
echo.
echo ┌─ 停止服务 ───────────────────────────────┐
taskkill /f /im node.exe >nul 2>&1
echo │ ✅ 服务已停止                             │
echo └────────────────────────────────────────────┘
echo.
set /p dummy=按回车返回主菜单...
goto menu

:scan_data
echo.
echo ┌─ 扫描数据 ───────────────────────────────┐
echo │ 正在扫描 D:\绘本 目录中的绘本数据...        │
echo │ 这可能需要一些时间，请耐心等待...            │
echo ├────────────────────────────────────────────┤
cd /d "%PROJECT_DIR%"
python scanner.py
if errorlevel 1 (
    echo │ ⚠️  扫描失败，请检查绘本目录是否存在           │
) else (
    echo │ ✅ 数据扫描完成，可以刷新页面查看新内容        │
)
echo └────────────────────────────────────────────┘
echo.
set /p dummy=按回车返回主菜单...
goto menu

:open_browser
echo.
echo ┌─ 打开浏览器 ─────────────────────────────┐
start http://localhost:%PORT%
echo │ 🌐 已打开浏览器                            │
echo └────────────────────────────────────────────┘
goto menu

:open_folder
echo.
echo ┌─ 打开文件夹 ─────────────────────────────┐
if exist "%BOOKS_DIR%" (
    start explorer "%BOOKS_DIR%"
    echo │ 📁 已打开绘本目录                          │
) else (
    echo │ ⚠️  绘本目录不存在: %BOOKS_DIR%               │
)
echo └────────────────────────────────────────────┘
echo.
set /p dummy=按回车返回主菜单...
goto menu

:end
cls
echo.
echo ╔═══════════════════════════════╗
echo ║                                 ║
echo ║   感谢使用绘本世界！📖        ║
echo ║                                 ║
echo ╚═══════════════════════════════╝
echo.
timeout /t 1 > nul
exit /b 0
