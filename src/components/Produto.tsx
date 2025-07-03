// src/components/Produto.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Produto = () => {
  return (
    <motion.section 
      id="produto" 
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            A Inteligência em Ação: O Aurora Negotiation GPS
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Nossa primeira "Ferramenta" é um sistema proativo para equipes de vendas e jurídicas. O "GPS de Negociação" não apenas armazena dados de CRM; ele lê e compreende e-mails e transcrições para identificar automaticamente Pontos de Dor, Objeções do Cliente e Compromissos assumidos. Com base nisso e em uma base de conhecimento de metodologias de sucesso, ele sugere a "Próxima Melhor Ação", transformando vendedores em estrategistas de elite.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Produto;