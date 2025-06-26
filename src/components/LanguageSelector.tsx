import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value)}
      className="bg-transparent text-sm text-white" // Adicionado text-white para melhor visibilidade no header escuro
    >
      <option value="pt" style={{ color: 'black' }}>Português</option> {/* Cor do texto das opções ajustada para contraste */}
      <option value="en" style={{ color: 'black' }}>English</option> {/* Cor do texto das opções ajustada para contraste */}
      <option value="es" style={{ color: 'black' }}>Español</option> {/* Cor do texto das opções ajustada para contraste */}
    </select>
  );
}
