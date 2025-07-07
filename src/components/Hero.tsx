import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/Puzzel_Aurora.png')"}}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full md:w-1/3 text-left p-8"
        >
          <blockquote className="text-white text-2xl font-semibold italic">
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