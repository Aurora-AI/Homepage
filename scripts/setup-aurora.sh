#!/bin/bash
# ==============================================================================
# Aurora Homepage Setup Script (Linux/Bash para Codex)
# ==============================================================================

echo "--- Iniciando configuração do ambiente da Aurora Homepage ---"

# 1. Vai para a raiz do projeto
cd "$(dirname "$0")/.." || exit 1

# 2. Verifica Node.js
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

# 5. Adiciona "type": "module" ao package.json se ainda não existir
if ! grep -q '"type": "module"' package.json; then
  echo '  "type": "module",' | sed -i '3s/.*/&\n  "type": "module",/' package.json
  echo '✓ Adicionado `"type": "module"` ao package.json'
fi

echo "--- Setup concluído com sucesso! ---"
