// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center text-center p-4"
    >
      {/* Overlay escuro sobre o vídeo/imagem de fundo global para legibilidade */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-10"
      >
        <blockquote className="text-white text-3xl md:text-5xl font-bold italic">
          E se a sua empresa pudesse sentir
        </blockquote>
        <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
          Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;