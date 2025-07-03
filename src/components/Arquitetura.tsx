// src/components/Arquitetura.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Componente do ícone de dispositivo
const IconDevice = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

// Componente do ícone de nuvem
const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.36-2.349 4.5 4.5 0 0 0-8.332-2.349A4.5 4.5 0 0 0 2.25 15Z" />
  </svg>
);

const Arquitetura = () => {
  return (
    <motion.section 
      id="arquitetura" 
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">O Cérebro Híbrido: Nosso Grafo de Orquestração.</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: On-Device */}
          <div className="block rounded-xl border border-white/10 p-8 shadow-sm hover:border-cyan-500/20 hover:shadow-cyan-500/10 transition-all">
            <div className="flex items-center gap-4">
              <IconDevice />
              <h3 className="text-lg font-bold text-white">Inteligência On-Device</h3>
            </div>
            <p className="mt-2 text-slate-300">
              <strong>Velocidade e Privacidade no Dispositivo.</strong> Utilizamos SLMs de ponta (Gemma, Phi-3) para executar tarefas instantaneamente, mesmo offline, garantindo que dados sensíveis nunca saiam da máquina do cliente.
            </p>
          </div>
          {/* Card 2: Nuvem */}
          <div className="block rounded-xl border border-white/10 p-8 shadow-sm hover:border-cyan-500/20 hover:shadow-cyan-500/10 transition-all">
            <div className="flex items-center gap-4">
              <IconCloud />
              <h3 className="text-lg font-bold text-white">Inteligência na Nuvem</h3>
            </div>
            <p className="mt-2 text-slate-300">
              <strong>Poder de Raciocínio Ilimitado.</strong> Para análises profundas, nosso AuroraRouter aciona LLMs de classe mundial como Gemini, garantindo máxima capacidade para os desafios mais complexos.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-base text-slate-200 font-medium">O Resultado: O equilíbrio perfeito entre custo, performance e segurança.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Arquitetura;