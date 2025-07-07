// Caminho do arquivo: src/components/Hero.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Imagem de Fundo */}
      <motion.img
        src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/Puzzel_Aurora.png"
        alt="Imagem conceitual da IA Aurora"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay de Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10"></div>
      
      {/* Conteúdo Textual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 text-center p-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          E se a sua empresa pudesse <span className="text-cyan-400 italic">sentir</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;