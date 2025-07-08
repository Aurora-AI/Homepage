import React from 'react';
import { motion } from 'framer-motion';

const ASSETS_BASE = import.meta.env.PUBLIC_ASSETS_BASE;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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

const CerebroDoMundo: React.FC = () => {
  const backgroundImage = `${ASSETS_BASE}/20-so0fJDrtzFxP0AMLoxVRxhHKglrlm1.webp`;

  return (
    <motion.section
      id="cerebro-do-mundo"
      className="relative py-20 px-4 min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          variants={textVariants}
        >
          O Cérebro do Mundo
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-slate-300 leading-relaxed"
          variants={textVariants}
        >
          Conectando informações e gerando insights em escala global. Nossas soluções de IA acessam e processam dados de forma distribuída para entregar inteligência acionável onde você mais precisa, em qualquer lugar do planeta.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CerebroDoMundo;