import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import { LanguageSelector } from '../LanguageSelector'; // Importa o LanguageSelector

export default function Hero() {
  const { t } = useTranslation(); // Inicializa o hook de tradução

  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{backgroundImage: "url('/aurora-fundo.png')"}}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

      {/* Language Selector no canto superior direito */}
      <div className="absolute top-6 right-6 z-20"> {/* Ajustado top/right para melhor espaçamento */}
        <LanguageSelector />
      </div>

      <h1 className="relative z-10 text-4xl md:text-6xl font-light text-center px-6">
        {t('greeting')} {/* Texto traduzido usando a chave 'greeting' */}
      </h1>
    </section>
  );
}
