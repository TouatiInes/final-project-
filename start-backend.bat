@echo off
echo Starting FlipIt Backend Server...
echo.

cd backend

echo Checking if Node.js is installed...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
npm install

echo.
echo Starting server...
echo Server will be available at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

node server.js

pause
