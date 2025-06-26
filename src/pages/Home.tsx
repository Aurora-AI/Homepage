// src/pages/Home.tsx - Adicionando a Seção de Tecnologia

import React from 'react';
import Hero from '../components/sections/Hero';
import AboutAI from '../components/sections/AboutAI';
import ROI from '../components/sections/ROI';
import SobreNos from '../components/sections/SobreNos';
import Investidores from '../components/sections/Investidores';
import { VisionSection } from '../components/sections/VisionSection';
import { TechnologySection } from '../components/sections/TechnologySection';
import { LanguageSelector } from '../components/LanguageSelector';
import IntroText from '../components/IntroText'; // Import IntroText

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <IntroText /> {/* Render IntroText here */}
      <LanguageSelector />
      <Hero />
      <AboutAI />
      <VisionSection />
      <TechnologySection />
      <ROI />
      <SobreNos />
      <Investidores />
    </main>
  );
}