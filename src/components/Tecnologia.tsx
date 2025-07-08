import React from 'react';
import { motion } from 'framer-motion';

const Tecnologia = () => {
  return (
    <motion.section 
      id="tecnologia"
      className="relative py-20 px-4 min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/4-GafrljrNanRCTCx6nAA1b2oYP4PhvW.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Sinfonia da Inteligência: A Engenharia por Trás da Aurora
        </motion.h2>
        <motion.p 
          className="text-lg leading-8 text-slate-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Nós esculpimos a inteligência, inspirados pelos princípios da otimização extrema. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões. É a diferença entre um ruído de dados e uma sinfonia de insights.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Tecnologia;