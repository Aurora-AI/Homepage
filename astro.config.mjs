import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Define o diretório público para assets estáticos
  publicDir: './public',
  // Modo de saída SSR/híbrido para rotas dinâmicas React Router
  output: 'server', // Alternativamente: 'hybrid'
  integrations: [react(), tailwind({
    // Permite que o Tailwind escaneie arquivos Astro e React
    applyBaseStyles: true // Aplica os estilos base do Tailwind
  })],
  vite: {
    // Configurações do Vite, se necessário (ex: para alias de importação)
    ssr: {
      noExternal: ['framer-motion'] // Necessário para a framer-motion funcionar no SSR
    }
  }
});