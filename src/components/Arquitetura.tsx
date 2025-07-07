import React from 'react';
import { motion } from 'framer-motion';

const Arquitetura = () => {
  return (
    <motion.section 
      id="arquitetura"
      className="py-24 sm:py-32 bg-darker-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O Cérebro Híbrido: Orquestrando a Inteligência onde ela é Mais Eficiente.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-accent pl-6">
              <h3 className="text-xl font-semibold text-white">Inteligência On-Device</h3>
              <p className="mt-2 text-slate-300">
                <strong>Velocidade e Privacidade no Dispositivo.</strong> Utilizamos SLMs de ponta (Gemma, Phi-3) para executar tarefas instantaneamente, mesmo offline, garantindo que dados sensíveis nunca saiam da máquina do cliente.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-accent pl-6">
              <h3 className="text-xl font-semibold text-white">Inteligência na Nuvem</h3>
              <p className="mt-2 text-slate-300">
                <strong>Poder de Raciocínio Ilimitado.</strong> Para análises profundas, nosso AuroraRouter aciona LLMs de classe mundial como Gemini, garantindo máxima capacidade para os desafios mais complexos.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/15.webp"
              alt="Arquitetura Aurora"
              className="rounded-lg shadow-xl ring-1 ring-white/10"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-cyan-200">
            O Resultado: O equilíbrio perfeito entre custo, performance e segurança, impulsionando uma nova era de agilidade e inteligência para sua empresa.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Arquitetura;