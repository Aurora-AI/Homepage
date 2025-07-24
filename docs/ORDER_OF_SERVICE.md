# Ordem de Serviço Aurora Frontend

## ID: AUR-HOME-ARC-001
## Título: Implementação da Arquitetura de Rotas Seguras React no `aurora-homepage`

---

### Missão Estratégica
Finalizar a implementação da arquitetura de roteamento React no projeto `aurora-homepage`, conforme padrões Aurora e requisitos da ordem de serviço, garantindo separação entre áreas públicas e privadas e preparando o terreno para o Aurora Crawler.

---

## Plano de Execução Detalhado

### **Fase 1: Instalação de Dependências**
- Execute no terminal:
  ```bash
  pnpm add react-router-dom @types/react-router-dom
  ```

---

### **Fase 2: Implementação da Arquitetura de Rotas**

1. **Criar `src/App.tsx`**
   - Implemente o roteamento principal usando `BrowserRouter` e `Routes` do React Router.
   - Defina as rotas:
     - `/` → `HomePage.tsx` (pública)
     - `/manifesto` → `ManifestoPage.tsx` (pública)
     - `/login` → `LoginPage.tsx` (pública)
     - `/app/crawler` → protegida por `ProtectedRoute`, renderiza `CrawlerPage.tsx`

2. **Criar o componente de rota protegida**
   - Arquivo: `src/components/ProtectedRoute.tsx`
   - Lógica: verifica token (ex: `aurora_token`) no `localStorage`. Se não houver, redireciona para `/login`.

3. **Criar páginas TSX**
   - Em `src/pages/`:
     - `HomePage.tsx` — título “Aurora - HomePage”
     - `ManifestoPage.tsx` — título “Manifesto Aurora”
     - `LoginPage.tsx` — título “Login Aurora”
     - `CrawlerPage.tsx` — título “Aurora Crawler”

4. **Criar integração Astro**
   - Arquivo: `src/pages/app.astro`
   - Renderize `<App />` do React dentro da página Astro.
   - Garanta que o roteamento React funcione corretamente dentro do Astro.

---

### **Fase 3: Rotas e Middleware**

- Certifique-se de que `/manifesto` e `/app/crawler` estão funcionais.
- Ajuste (se necessário) middleware para proteger `/app/*`.

---

### **Fase 4: Testes e Documentação**

1. **Testes manuais**
   - Navegue para `/app/crawler` sem token: usuário deve ser redirecionado para `/login`.
   - Com token: acesso liberado normalmente.

2. **Documentação**
   - Atualize o README e/ou docs com instruções de uso do novo sistema de rotas.

---

### **Fase 5: Versionamento**

- Crie a branch: `feature/secure-routing`
- Commit todas as alterações seguindo Conventional Commits.
- Abra um Pull Request referenciando a [issue #2](https://github.com/Aurora-AI/Homepage/issues/2) e esta ordem de serviço.

---

### Checklist Aurora

- [ ] React Router instalado e configurado
- [ ] Estrutura de rotas conforme padrão Aurora
- [ ] Componentização modular e tipada
- [ ] Testes manuais de navegação e redirecionamento
- [ ] Documentação atualizada
- [ ] PR revisado e aprovado

---

### Contexto Técnico

- **Repositório:** `aurora-homepage`
- **Stack:** Astro, React, TypeScript, Vite, React Router
- **Referência:** Issue [#2](https://github.com/Aurora-AI/Homepage/issues/2) | ORDER_OF_SERVICE.md

---

> **Atenção:** Esta implementação é requisito para evolução do Crawler e outras aplicações Aurora. Siga rigorosamente os padrões de modularidade, escalabilidade e documentação.