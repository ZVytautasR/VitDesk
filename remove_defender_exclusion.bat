@echo off
chcp 1251 >nul
rem ================================================================
rem  remove_defender_exclusion.bat - удаление исключений Windows Defender для VitDesk.
rem  Папка VitDesk = папка этого батника, плюс %ProgramData%\VitDesk
rem  и процесс VitDesk.exe. Запускается пользователем вручную (нужен UAC).
rem ================================================================
setlocal EnableExtensions
net session >nul 2>&1
if errorlevel 1 (
  echo Нужны права администратора - запрашиваю UAC...
  powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
  exit /b
)
set "DIR=%~dp0"
if "%DIR:~-1%"=="\" set "DIR=%DIR:~0,-1%"
set "DATA=%ProgramData%\VitDesk"
echo Удаление исключений Windows Defender:
echo   папка   : %DIR%
echo   папка   : %DATA%
echo   процесс : VitDesk.exe
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ok=$true; foreach($p in @($env:DIR,$env:DATA)){ try { Remove-MpPreference -ExclusionPath $p -ErrorAction Stop; Write-Host ('  OK    путь    ' + $p) } catch { $ok=$false; Write-Host ('  ОШИБКА путь   ' + $p + ' : ' + $_.Exception.Message) } };" ^
  "try { Remove-MpPreference -ExclusionProcess 'VitDesk.exe' -ErrorAction Stop; Write-Host '  OK    процесс VitDesk.exe' } catch { $ok=$false; Write-Host ('  ОШИБКА процесс VitDesk.exe : ' + $_.Exception.Message) };" ^
  "Write-Host ''; $m=Get-MpPreference -ErrorAction SilentlyContinue; if($m){ Write-Host 'Сейчас в исключениях:'; $m.ExclusionPath | Where-Object { $_ -like '*VitDesk*' -or $_ -eq $env:DIR } | ForEach-Object { Write-Host ('  ' + $_) }; $m.ExclusionProcess | Where-Object { $_ -like '*VitDesk*' } | ForEach-Object { Write-Host ('  ' + $_) } };" ^
  "if(-not $ok){ Write-Host ''; Write-Host 'Часть не выполнена: Defender отключён/другой антивирус или включена Защита от подделки (Tamper Protection).'; exit 1 }"
echo.
if errorlevel 1 (echo [!] Готово с ошибками.) else (echo [ГОТОВО] Удаление выполнено.)
pause
