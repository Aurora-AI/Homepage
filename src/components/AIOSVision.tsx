import React from 'react';
import { motion } from 'framer-motion';

const ASSETS_BASE = import.meta.env.PUBLIC_ASSETS_BASE;

const AIOSVision: React.FC = () => {
  const imageUrl = `${ASSETS_BASE}/13-ZNOv8fGzWwKEB4O5v2HtRNn4pruf91.webp`;

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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="aios-vision"
      className="relative py-20 px-4 md:py-32 bg-darker-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={itemVariants} className="lg:order-1">
          <img src={imageUrl} alt="Visão AIOS Aurora" 
               className="w-full h-auto object-cover rounded-lg shadow-lg ring-1 ring-purple-accent/20" />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Visão AIOS: Onde a Inteligência se Torna Plataforma
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            A próxima geração de softwares, onde a inteligência artificial não é uma ferramenta, mas a própria plataforma para inovação, adaptabilidade e crescimento contínuo. Prepare-se para um novo paradigma de operação.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIOSVision;