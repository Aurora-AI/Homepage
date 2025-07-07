import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.6, 0.05, -0.01, 0.9],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  const backgroundImage = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/Puzzel_Aurora.png';

  return (
    <motion.section
      id="futuro-sistemas-operacionais"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 md:py-0"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          variants={textVariants}
        >
          O Futuro dos Sistemas Operacionais é Cognitivo.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          variants={textVariants}
        >
          A era das aplicações que apenas consomem APIs de IA representa o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo. A Aurora não está construindo apenas mais uma ferramenta. Estamos construindo o primeiro sistema operacional projetado para a própria inteligência.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;