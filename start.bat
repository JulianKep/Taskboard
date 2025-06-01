@echo off
start "" cmd /c "node index.js"
timeout /t 2 >nul
start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=http://localhost:8080/
