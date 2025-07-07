import React from 'react';
import { motion } from 'framer-motion';

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

const Tecnologia: React.FC = () => {
  const backgroundImage = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/4.webp';

  return (
    <motion.section
      id="tecnologia"
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
          Nossa Metodologia: A Vantagem Competitiva Assimétrica
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-slate-300 leading-relaxed"
          variants={textVariants}
        >
          A Aurora não é apenas construída com IA; ela é construída por IA. Nossa "Fábrica de Inteligência" utiliza um ecossistema de agentes especializados para projetar, codificar, testar e implantar nosso software, nos permitindo construir e iterar em uma velocidade e com uma qualidade sem precedentes. Enquanto outros montam ferramentas, nós cultivamos uma inteligência que se auto-aperfeiçoa.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Tecnologia;