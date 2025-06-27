// src/components/sections/Hero.tsx

import React from 'react';

// Assumindo que o componente LanguageSelector e o hook useTranslation
// possam ser adicionados aqui no futuro.
// import { useTranslation } from 'react-i18next';
// import { LanguageSelector } from '../LanguageSelector';

export default function Hero() {
  // const { t } = useTranslation();

  return (
    <section 
      // O estilo inline foi removido e substituído pela classe bg-[url(...)]
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-[url('/assets/images/Puzzel_Aurora.png')]"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" /> {/* Overlay mais sutil */}

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
          Inteligência que se Constrói.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
          Orquestramos sistemas cognitivos que aprendem, adaptam e evoluem com o seu negócio.
        </p>
        {/* Futuro botão de CTA pode ser adicionado aqui */}
      </div>
    </section>
  );
}