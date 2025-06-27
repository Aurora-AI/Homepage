// src/pages/Home.tsx - Adicionando a Seção de Tecnologia

import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}