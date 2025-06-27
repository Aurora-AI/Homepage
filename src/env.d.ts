// src/env.d.ts

/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Adicione outras variáveis de ambiente que você usar no futuro aqui
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}