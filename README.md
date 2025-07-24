# Aurora Homepage

Uma homepage moderna e elegante construída com tecnologias de ponta para apresentar a Aurora e sua visão revolucionária de inteligência artificial.

## 🚀 Stack Tecnológica


## 🌐 Rotas Principais

- `/` — Página inicial pública (HomePage)
- `/login` — Página de autenticação
- `/manifesto` — Manifesto Aurora (missão e visão do projeto)
- `/app/crawler` — Área protegida (requer token no localStorage)


## 🛠️ Setup Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Aurora-Homepage/Homepage.git
cd Homepage

# Copie o exemplo de variáveis de ambiente
cp .env.example .env

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Variáveis de Ambiente

Copie `.env.example` para `.env` e ajuste `PUBLIC_ASSETS_BASE` caso deseje alterar o bucket de assets.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizáveis
│   │   └── AnimatedCard.astro # Card com borda animada
│   ├── Hero.tsx        # Seção hero
│   ├── Tese.tsx        # Seção da tese
│   └── ...
├── layouts/            # Layouts Astro
│   └── Layout.astro    # Layout principal
└── pages/              # Páginas
    └── index.astro     # Página inicial
```

## 🎨 Características

- Design responsivo e moderno
- Animações suaves com Framer Motion
- Otimizado para SEO
- Performance otimizada com Astro
- Componentes tipados com TypeScript

## 📄 Licença

Este projeto é propriedade da Aurora.

33
git 