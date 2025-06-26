/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // Adicione outras variáveis de ambiente aqui se forem usadas no código
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
