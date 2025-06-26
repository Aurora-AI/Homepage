# --- ESTÁGIO 1: Build da Aplicação ---
# Usamos uma imagem Node.js (versão 18-alpine) para construir nosso projeto
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de definição de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Executa o 'Clean Install' (ci) que é mais rápido e confiável para ambientes automatizados.
# Ele faz uma instalação limpa baseada estritamente no package-lock.json.
RUN npm ci

# Copia todo o resto do código do projeto para o contêiner
# (respeitando as regras que definimos no .dockerignore)
COPY . .

# Executa o comando de build, que irá gerar os arquivos estáticos na pasta 'dist'
RUN npm run build


# --- ESTÁGIO 2: Servidor de Produção ---
# Usamos uma imagem Nginx super leve para servir nossos arquivos estáticos
FROM nginx:1.25-alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa própria configuração do Nginx (o arquivo nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos gerados no estágio de build para a pasta que o Nginx serve
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o servidor Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]