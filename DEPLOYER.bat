@echo off
title Deploiement Portfolio - Nassim ABIARI
color 0A
echo.
echo  =====================================================
echo   DEPLOIEMENT PORTFOLIO - NASSIM ABIARI
echo  =====================================================
echo.
echo  Ce script va deployer ton portfolio sur Netlify.
echo  Un navigateur va s'ouvrir pour te connecter.
echo.
pause

echo.
echo [1/3] Connexion a Netlify...
echo      (Une fenetre de navigateur va s'ouvrir)
echo.
call npx netlify-cli login

echo.
echo [2/3] Construction du projet...
call npm run build

echo.
echo [3/3] Deploiement en production...
call npx netlify-cli deploy --prod --dir .next

echo.
echo  =====================================================
echo   DEPLOIEMENT TERMINE !
echo   Ton portfolio est en ligne avec le nouveau fichier.
echo  =====================================================
echo.
pause
