// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

export const initializeI18n = () => {
  return i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: 'pt', // Idioma padrão
      fallbackLng: 'pt', // Idioma de fallback
      supportedLngs: ['pt', 'en', 'es'], // Idiomas suportados
      ns: ['translation'], // Namespaces
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false, // React já faz o escaping
      },
      backend: {
        // Caminho para os arquivos de tradução na pasta `public`
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      // debug: import.meta.env.DEV, // Habilita logs no console durante o desenvolvimento
      // Nota: import.meta.env.DEV é específico do Vite. Em Astro, pode-se usar outras formas
      // de definir o modo de debug ou simplesmente deixar true para desenvolvimento.
      // Por enquanto, vou omitir para evitar problemas de compatibilidade imediata,
      // mas pode ser adicionado se o logging for necessário.
      debug: false,
    });
};
