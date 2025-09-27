@echo off
echo Video Fix Script for GVPL Technologies
echo =====================================
echo.

REM Check if FFmpeg is installed
ffmpeg -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: FFmpeg is not installed or not in PATH
    echo Please install FFmpeg from https://ffmpeg.org/download.html
    echo.
    echo Alternative: Use online tools like:
    echo - https://www.freeconvert.com/video-compressor
    echo - https://compressor.io/
    echo - https://cloudconvert.com/
    echo.
    pause
    exit /b 1
)

echo FFmpeg found! Starting video fix...
echo.

REM Create a backup of original video
echo Creating backup of original video...
copy "src\assets\video\hero.mp4" "src\assets\video\hero_backup.mp4"

REM Fix video encoding issues and compress
echo Fixing video encoding and compressing...
ffmpeg -i "src\assets\video\hero.mp4" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart -max_muxing_queue_size 1024 "src\assets\video\hero_fixed.mp4"

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS: Video fixed and compressed!
    echo.
    echo File sizes:
    for %%F in ("src\assets\video\hero.mp4") do echo Original: %%~zF bytes
    for %%F in ("src\assets\video\hero_fixed.mp4") do echo Fixed: %%~zF bytes
    echo.
    echo Next steps:
    echo 1. Replace hero.mp4 with hero_fixed.mp4
    echo 2. Test the website
    echo 3. If working, delete hero_backup.mp4
    echo.
    echo Do you want to replace the original file? (Y/N)
    set /p choice=
    if /i "%choice%"=="Y" (
        del "src\assets\video\hero.mp4"
        ren "src\assets\video\hero_fixed.mp4" "hero.mp4"
        echo Original file replaced with fixed version.
    ) else (
        echo Original file kept. Use hero_fixed.mp4 for testing.
    )
) else (
    echo.
    echo ERROR: Video fix failed
    echo The original video file may be corrupted.
    echo Try using online video compression tools instead.
)

echo.
pause
