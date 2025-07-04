import React from 'react';
import { motion } from 'framer-motion';
import Heading from './ui/Heading';

const CerebroDoMundo = () => {
  return (
    <motion.section 
      id="cerebro-do-mundo" 
      className="relative bg-cover bg-center rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 p-8 md:p-16 text-center"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/20.webp')" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-slate-900/70 rounded-2xl"></div>
      <div className="relative z-10">
        <Heading as="h2" className="text-4xl md:text-5xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          O Cérebro do Mundo: A Próxima Camada da Realidade
        </Heading>
        <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
          A Aurora não está construindo uma ferramenta melhor. Nós estamos fazendo o oceano pensar.
        </p>
      </div>
    </motion.section>
  );
};
export default CerebroDoMundo;