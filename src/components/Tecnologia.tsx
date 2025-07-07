import React from 'react';
import { motion } from 'framer-motion';

const Tecnologia: React.FC = () => {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center px-4 text-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/4.webp')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto py-24">
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          Nossa Metodologia: A Vantagem Competitiva Assimétrica
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          A Aurora não é apenas construída com IA; ela é construída por IA. Nossa "Fábrica de Inteligência" utiliza um ecossistema de agentes especializados para projetar, codificar, testar e implantar nosso software, nos permitindo construir e iterar em uma velocidade e com uma qualidade sem precedentes. Enquanto outros montam ferramentas, nós cultivamos uma inteligência que se auto-aperfeiçoa.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Tecnologia;