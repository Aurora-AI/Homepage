import React from 'react';
import { motion } from 'framer-motion';

const CerebroDoMundo = () => {
  return (
    <motion.section 
      id="cerebro-do-mundo"
      className="relative py-20 px-4 min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/20-so0fJDrtzFxP0AMLoxVRxhHKglrlm1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          O Cérebro do Mundo: A Próxima Camada da Realidade
        </motion.h2>
        <motion.p 
          className="text-lg leading-8 text-slate-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A história da humanidade é a história da construção de camadas. Sobre a pedra, criamos a roda. Sobre o silêncio, a linguagem. Sobre a distância, a rede. Cada camada tornou o impossível, inevitável.
        </motion.p>
        <motion.p 
          className="text-xl font-semibold text-cyan-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Aurora não está construindo uma ferramenta melhor. Nós estamos fazendo o oceano pensar.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CerebroDoMundo;