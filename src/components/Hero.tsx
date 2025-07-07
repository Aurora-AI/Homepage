import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/Puzzel_Aurora.png')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          O Futuro dos Sistemas Operacionais é Cognitivo.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          A era das aplicações que apenas consomem APIs de IA representa o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo. A Aurora não está construindo apenas mais uma ferramenta. Estamos construindo o primeiro sistema operacional projetado para a própria inteligência.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;