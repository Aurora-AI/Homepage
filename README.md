# Aurora Homepage

Frontend institucional da plataforma Aurora: uma IA sensível, estratégica e co-criadora.  
Construído com **React + Vite + TailwindCSS**, com estrutura modular e foco em UX futurista.

## Estrutura

- `src/pages/` → Páginas do site (ex: Home, Manifesto)
- `src/components/sections/` → Componentes de blocos institucionais
- `scripts/` → Scripts de setup automatizado

## Scripts

```bash
npm run dev        # Inicia o servidor Vite
npm run build      # Gera build para produção
.\scripts\setup-aurora.ps1   # Script de setup no Windows (Codex/Dev)
```

## Internationalization & Language Selector

Este projeto utiliza `react-i18next` para internacionalização. Um seletor de idiomas foi adicionado ao header, permitindo a escolha entre Português (padrão), Inglês e Espanhol.

### Uso do Seletor de Idiomas

O seletor de idiomas está localizado no canto superior direito da página. Simplesmente clique no dropdown e selecione o idioma desejado. O conteúdo da página será atualizado dinamicamente.

### Adicionando Novos Idiomas

Para adicionar suporte a um novo idioma:

1.  **Crie o arquivo de tradução**:
    Adicione um novo arquivo JSON na pasta `src/locales/`, por exemplo, `fr.json` para Francês.
    ```json
    // src/locales/fr.json
    {
      "greeting": "Bonjour!",
      // Adicione outras chaves de tradução aqui
    }
    ```

2.  **Atualize a configuração do i18n**:
    Importe o novo arquivo de tradução e adicione-o aos recursos no arquivo `src/main.tsx`:

    ```typescript
    // src/main.tsx
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import pt from './locales/pt.json';
    import en from './locales/en.json';
    import es from './locales/es.json';
    import fr from './locales/fr.json'; // 1. Importe o novo idioma

    i18n
      .use(initReactI18next)
      .init({
        resources: {
          pt: { translation: pt },
          en: { translation: en },
          es: { translation: es },
          fr: { translation: fr } // 2. Adicione aos recursos
        },
        lng: 'pt',
        fallbackLng: 'pt',
        interpolation: {
          escapeValue: false
        }
      });
    ```

3.  **Adicione a opção no componente LanguageSelector**:
    Atualize o componente `src/components/LanguageSelector.tsx` para incluir a nova opção de idioma:

    ```tsx
    // src/components/LanguageSelector.tsx
    // ...
    export function LanguageSelector() {
      // ...
      return (
        <select
          value={i18n.language}
          onChange={e => i18n.changeLanguage(e.target.value)}
          className="bg-transparent text-sm text-white"
        >
          <option value="pt" style={{ color: 'black' }}>Português</option>
          <option value="en" style={{ color: 'black' }}>English</option>
          <option value="es" style={{ color: 'black' }}>Español</option>
          <option value="fr" style={{ color: 'black' }}>Français</option> {/* Adicione a nova opção */}
        </select>
      );
    }
    ```

4.  **Traduza os textos**:
    Certifique-se de que todas as chaves de tradução utilizadas nos componentes (ex: `t('yourKey')`) tenham uma entrada correspondente no novo arquivo JSON de idioma.
