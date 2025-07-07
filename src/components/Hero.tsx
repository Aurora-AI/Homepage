import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
};

const Hero: React.FC = () => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4 text-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          variants={textVariants}
        >
          O Futuro dos Sistemas Operacionais é Cognitivo.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          variants={textVariants}
        >
          A era das aplicações que apenas consomem APIs de IA representa o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo. A Aurora não está construindo apenas mais uma ferramenta. Estamos construindo o primeiro sistema operacional projetado para a própria inteligência.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;