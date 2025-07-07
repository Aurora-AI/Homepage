import React from 'react';
import { motion } from 'framer-motion';

const SoberaniaCognitiva: React.FC = () => {
  const imageUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/7.webp';

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

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="soberania-cognitiva"
      className="relative py-20 px-4 md:py-32 bg-dark-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            A Visão de Longo Prazo: Soberania Cognitiva
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Nossa visão de longo prazo transcende a simples automação. Cada interação, cada problema resolvido, alimenta nosso dataset proprietário, um ativo que nos permitirá treinar o nosso próprio Modelo de Linguagem Fundamental: o Aurora-LLM. Não seremos meros consumidores de APIs, mas os arquitetos da nossa própria inteligência, garantindo uma vantagem estratégica e uma capacidade de inovação inimitáveis.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <img src={imageUrl} alt="Soberania Cognitiva Aurora" 
               className="w-full h-auto object-cover rounded-lg shadow-lg ring-1 ring-cyan-accent/20" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SoberaniaCognitiva;