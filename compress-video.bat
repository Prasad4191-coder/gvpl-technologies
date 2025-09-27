@echo off
echo Video Compression Script for GVPL Technologies
echo =============================================
echo.

REM Check if FFmpeg is installed
ffmpeg -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: FFmpeg is not installed or not in PATH
    echo Please install FFmpeg from https://ffmpeg.org/download.html
    echo.
    pause
    exit /b 1
)

echo FFmpeg found! Starting compression...
echo.

REM Create compressed video (70-80% size reduction)
echo Compressing video to 1080p...
ffmpeg -i "src\assets\video\hero.mp4" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "src\assets\video\hero_compressed.mp4"

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: Video compressed successfully!
    echo Original size: Check your file explorer
    echo Compressed file: src\assets\video\hero_compressed.mp4
    echo.
    echo Next steps:
    echo 1. Replace the original hero.mp4 with hero_compressed.mp4
    echo 2. Test the website to ensure video quality is acceptable
    echo 3. Deploy to Netlify
) else (
    echo.
    echo ERROR: Compression failed
)

echo.
pause
