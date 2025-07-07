import React from 'react';
import { motion } from 'framer-motion';

const Arquitetura: React.FC = () => {
  return (
    <motion.section 
      className="w-full py-24 sm:py-32 bg-darker-blue px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Arquitetura Inteligente
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Arquitetura por trás da nossa inteligência: Aqui iremos detalhar os pilares fundamentais que sustentam nossas soluções, garantindo escalabilidade, segurança e performance inigualáveis.
            </p>
          </motion.div>
          <motion.div 
            className="w-full h-96 rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <img 
              src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/15.webp"
              alt="Arquitetura Aurora"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Arquitetura;