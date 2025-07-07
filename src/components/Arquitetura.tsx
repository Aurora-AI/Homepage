import React from 'react';
import { motion } from 'framer-motion';

const Arquitetura: React.FC = () => {
  const imageUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/15.webp';

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
      id="arquitetura"
      className="relative py-20 px-4 md:py-32 bg-darker-blue"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={itemVariants} className="lg:order-2">
          <img src={imageUrl} alt="Arquitetura Aurora" 
               className="w-full h-auto object-cover rounded-lg shadow-lg ring-1 ring-white/10" />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
             Arquitetura por Trás da Nossa Inteligência
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Aqui iremos detalhar os pilares fundamentais que sustentam nossas soluções, garantindo escalabilidade, segurança e performance inigualáveis. Nossa base é construída para a complexidade do mundo real, com uma agilidade que redefine os limites do software.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Arquitetura;