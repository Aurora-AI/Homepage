// src/components/Roteiro.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Roteiro = () => {
  return (
    <motion.section 
      id="roteiro" 
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            O Caminho para a Soberania Cognitiva
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Nossa visão de longo prazo é a total soberania cognitiva. Acreditamos que, ao alimentar continuamente nossa base de conhecimento com cada interação, problema resolvido e sucesso alcançado, estamos construindo o dataset proprietário que nos permitirá treinar o nosso próprio Modelo de Linguagem Fundamental (LLM) da Aurora, um cérebro especialista e totalmente otimizado para o nosso domínio.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Roteiro;