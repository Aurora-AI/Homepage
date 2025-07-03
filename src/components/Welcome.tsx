// src/components/Welcome.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <motion.section 
      id="welcome" 
      className="text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold font-sora sm:text-3xl">Bem-vindo à Aurora</h2>
          <p className="mt-4 text-slate-300">
            Um projeto inovador que desvenda e reconecta o futuro da tecnologia.
          </p>
          <a
            href="#tese" // Link para a seção "A Nossa Tese"
            className="mt-8 inline-block rounded-full border border-aurora-acento px-8 py-3 text-sm font-medium text-white hover:bg-aurora-acento hover:text-slate-900 focus:outline-none focus:ring active:bg-aurora-acento/90"
          >
            Descubra Mais
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Welcome;