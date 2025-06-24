#!/bin/bash
# ============================================================================
# Aurora Homepage Setup Script (Linux/Bash para Codex)
# ============================================================================

echo "--- Iniciando configuração do ambiente da Aurora Homepage ---"

# 1. Garante que estamos na raiz do projeto
cd "$(dirname "$0")/.." || exit 1

# 2. Verifica se Node.js está disponível
if ! command -v node &> /dev/null; then
  echo "ERRO: Node.js não encontrado. Instale o Node.js antes de continuar."
  exit 1
fi

# 3. Instala dependências
echo "--- Instalando dependências via NPM ---"
npm install

# 4. Instala React Router (se necessário)
if [ ! -d "node_modules/react-router-dom" ]; then
  echo "--- Instalando React Router ---"
  npm install react-router-dom @types/react-router-dom
fi

# 5. Adiciona type=module no package.json se não estiver presente
if ! grep -q '"type": "module"' package.json; then
  sed -i 's/"version": "\(.*\)"/"version": "\1",\n  "type": "module"/' package.json
  echo "✔ Campo \"type\": \"module\" adicionado ao package.json"
fi

echo "--- Setup concluído com sucesso! ---"
