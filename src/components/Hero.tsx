// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="h-screen w-full flex items-center justify-end hero-background" // Estilo movido para esta classe
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-full md:w-1/2 text-center md:text-left p-8"
      >
        <blockquote className="text-white text-xl font-semibold italic">
          E se a sua empresa pudesse sentir
        </blockquote>
        <p className="mt-4 text-aurora-text-secondary text-lg">
          Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;