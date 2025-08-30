@echo off
echo ========================================
echo  PURESYSTEM - Demarrage Frontend v1.02  
echo ========================================
echo.

echo Verification des dependances...
if not exist "node_modules" (
    echo Installation des dependances Node.js...
    npm install
    if errorlevel 1 (
        echo Tentative avec yarn...
        yarn install
        if errorlevel 1 (
            echo ERREUR: Impossible d'installer les dependances
            pause
            exit /b 1
        )
    )
)

echo.
echo Demarrage de l'application React...
echo Frontend disponible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter l'application
echo.

npm start

pause