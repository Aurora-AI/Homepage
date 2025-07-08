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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              O Cérebro Híbrido: Orquestrando a Inteligência onde ela é Mais Eficiente.
            </h2>
            
            <div className="space-y-6">
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
            
            <p className="mt-8 text-lg font-medium text-cyan-200">
              O Resultado: O equilíbrio perfeito entre custo, performance e segurança, impulsionando uma nova era de agilidade e inteligência para sua empresa.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/15-spF0ePW95YztzfdyfEN2adS11tqutX.webp"
              alt="Cadeado digital representando arquitetura segura"
              className="w-full rounded-lg shadow-xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Arquitetura;