import React from 'react';
import { motion } from 'framer-motion';

const Tese = () => {
  return (
    <motion.section 
      id="tese"
      className="py-24 sm:py-32 bg-dark-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          O Paradigma "Intelligence-First"
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
        </p>
      </div>
    </motion.section>
  );
};

export default Tese;