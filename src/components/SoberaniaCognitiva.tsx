import React from 'react';
import { motion } from 'framer-motion';

const SoberaniaCognitiva = () => {
  return (
    <motion.section 
      id="soberania-cognitiva"
      className="py-24 sm:py-32 bg-darker-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              O Caminho para a Soberania Cognitiva
            </h2>
            <p className="text-lg leading-8 text-slate-300 mb-8">
              Nossa visão de longo prazo transcende a simples automação ou o consumo de modelos prontos. Buscamos a total soberania cognitiva: a capacidade de controlar, personalizar e impulsionar nossa própria inteligência fundamental, construindo um ativo que nos dará uma vantagem competitiva inimitável.
            </p>
            
            <div className="space-y-6">
              <div className="bg-dark-blue/50 rounded-lg p-4 border-l-4 border-cyan-accent">
                <h3 className="text-lg font-semibold text-white">Treinamento Contínuo e Propagação do Conhecimento</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Cada interação, cada problema resolvido, cada insight gerado pela nossa Fábrica de Inteligência alimenta diretamente nossa base de conhecimento proprietária.
                </p>
              </div>
              
              <div className="bg-dark-blue/50 rounded-lg p-4 border-l-4 border-purple-accent">
                <h3 className="text-lg font-semibold text-white">O Aurora-LLM: O Ativo Inimitável</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Com o Aurora-LLM, não seremos meros consumidores de APIs, mas os arquitetos da nossa própria inteligência, garantindo uma liderança tecnológica perene.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/7-01dQTRGRFSCmTFGJGubQrnBXdMa3U6.webp"
              alt="Perfil com globo simbolizando soberania cognitiva"
              className="w-full rounded-lg shadow-xl ring-1 ring-cyan-accent/20"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SoberaniaCognitiva;