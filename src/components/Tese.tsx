import React from 'react';
import { motion } from 'framer-motion';

const Tese = () => {
  return (
    <motion.section 
      id="tese"
      className="relative py-20 px-4 min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/23-kiEIXBuOiFdI3rz5ryD6xWCHFowtEN.webp')",
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
          O Paradigma "Intelligence-First"
        </motion.h2>
        <motion.p 
          className="text-lg leading-8 text-slate-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Tese;