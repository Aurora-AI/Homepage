// src/components/sections/Hero.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
export default function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-[url('/assets/imagens/AuroraHero.png')]"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

      {/* Language Selector no canto superior direito */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      <h1 className="relative z-10 text-4xl md:text-6xl font-light text-center px-6">
        {t('greeting')}
      </h1>
    </section>
  );
}
