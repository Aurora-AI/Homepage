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

const Tese: React.FC = () => {
  const backgroundImage = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/23.webp';

  return (
    <motion.section
      id="tese"
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
          Onde Outros Reagem, Nós Antecipamos.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-slate-300 leading-relaxed"
          variants={textVariants}
        >
          O software tradicional é um repositório passivo; ele espera seus comandos. Nós acreditamos que este modelo está quebrado. Nossa filosofia "Intelligence-First" inverte essa lógica: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Tese;