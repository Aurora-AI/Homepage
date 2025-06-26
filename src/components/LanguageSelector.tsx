import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={i18n.language.split('-')[0]} // Pega a parte principal do idioma (ex: 'pt' de 'pt-BR')
        onChange={changeLanguage}
        className="appearance-none bg-transparent text-white py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none cursor-pointer border border-gray-600 hover:border-gray-400 transition-colors duration-150 ease-in-out"
        style={{
          WebkitAppearance: 'none', /* Remove default arrow in Safari */
          MozAppearance: 'none',    /* Remove default arrow in Firefox */
          appearance: 'none'        /* Remove default arrow in other browsers */
        }}
      >
        <option value="pt" className="text-black bg-gray-100">Português</option>
        <option value="en" className="text-black bg-gray-100">English</option>
        <option value="es" className="text-black bg-gray-100">Español</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0L10 10.405l2.908-2.857c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S5.11 9.581 5.11 9.163c0-.418.08-.99.406-1.615z"/>
        </svg>
      </div>
    </div>
  );
}
