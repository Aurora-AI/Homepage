import React from 'react';
import Hero from '../components/sections/Hero';
import AboutAI from '../components/sections/AboutAI';
import ROI from '../components/sections/ROI';
import SobreNos from '../components/sections/SobreNos';
import Investidores from '../components/sections/Investidores';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutAI />
      <ROI />
      <SobreNos />
      <Investidores />
    </main>
  );
}
