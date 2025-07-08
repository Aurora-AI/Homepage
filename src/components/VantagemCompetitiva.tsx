import React from 'react';
import { motion } from 'framer-motion';

const VantagemCompetitiva = () => {
  return (
    <motion.section 
      id="vantagem-competitiva"
      className="py-24 sm:py-32 bg-darker-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/16-nbHdLwznbNFlZznF4UdIJqVcXRX7o3.webp"
              alt="Dashboard UI representando vantagem competitiva"
              className="w-full rounded-lg shadow-xl ring-1 ring-cyan-accent/20"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Como Construímos: Nossa Vantagem Competitiva Assimétrica.
            </h2>
            <p className="text-lg leading-8 text-slate-300 mb-8">
              A Aurora não é apenas construída com IA; ela é construída por IA. Nossa metodologia e arquitetura nos permitem entregar soluções de software e inteligência de forma que desequilibra o mercado, gerando velocidade, assertividade e uma fração mínima dos custos de abordagens tradicionais.
            </p>
            
            <div className="bg-dark-blue/50 rounded-lg p-6 border-l-4 border-purple-accent">
              <h3 className="text-xl font-semibold text-white mb-3">A Inteligência em Ação: O Aurora Negotiation GPS</h3>
              <p className="text-slate-300">
                Nossa primeira "Ferramenta" é um sistema proativo para equipes de vendas e jurídicas. O "GPS de Negociação" não apenas armazena dados de CRM; ele lê e compreende e-mails e transcrições para identificar automaticamente Pontos de Dor, Objeções do Cliente e Compromissos assumidos. Com base nisso e em uma base de conhecimento de metodologias de sucesso, ele sugere a "Próxima Melhor Ação", transformando vendedores em estrategistas de elite.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VantagemCompetitiva;