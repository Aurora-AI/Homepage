// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full bg-no-repeat bg-center"
      style={{ 
        backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/Puzzel_Aurora.png')",
        backgroundSize: 'contain', // CORREÇÃO: Garante que a imagem não tenha zoom/corte
      }}
    >
      {/* O overlay escuro ajuda na legibilidade do texto */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full md:w-1/3 text-left p-8"
        >
          <blockquote className="text-white text-xl font-semibold italic">
            E se a sua empresa pudesse sentir
          </blockquote>
          <p className="mt-4 text-slate-300 text-lg">
            Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;