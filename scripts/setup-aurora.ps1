# scripts/setup-aurora.ps1
Write-Host "--- Iniciando configuração do ambiente da Aurora Homepage ---" -ForegroundColor Cyan

# 1. Ir para a raiz do projeto
Set-Location -Path "$PSScriptRoot\.."

# 2. Verificar se Node.js está instalado
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "ERRO: Node.js não encontrado. Instale o Node.js antes de continuar."
    exit 1
}

# 3. Instalar dependências
Write-Host "--- Instalando dependências via NPM ---" -ForegroundColor Cyan
npm install

# React Router DOM não está sendo usado no projeto Astro atual.
# Removendo a instalação automática para simplificar.
# # 4. Verificar instalação do React Router DOM
# if (-not (Test-Path "node_modules/react-router-dom")) {
#     Write-Host "--- Instalando React Router ---" -ForegroundColor Cyan
#     npm install react-router-dom @types/react-router-dom
# }

# 5. Adicionar "type": "module" ao package.json, se necessário
$packageJson = Get-Content -Raw -Path "package.json" | ConvertFrom-Json
if (-not $packageJson.PSObject.Properties.Name.Contains("type")) {
    $packageJson | Add-Member -NotePropertyName "type" -NotePropertyValue "module"
    $packageJson | ConvertTo-Json -Depth 10 | Set-Content -Path "package.json"
    Write-Host '✓ Campo "type": "module" adicionado ao package.json'
}

Write-Host "--- Setup concluído com sucesso! ---" -ForegroundColor Green
