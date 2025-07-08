// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full flex items-center bg-no-repeat bg-center"
      style={{ 
        backgroundImage: "url('https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/Puzzel_Aurora-b3JcFEtDNmrNYlC6R61nNvTg54Zet6.png')",
        backgroundSize: 'contain',
        backgroundColor: '#1a0033'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full flex justify-end"
        >
          <div className="w-full md:w-1/3 text-left">
            <blockquote className="text-white text-xl font-semibold italic">
              E se a sua empresa pudesse sentir
            </blockquote>
            <p className="mt-4 text-slate-300">
              Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;