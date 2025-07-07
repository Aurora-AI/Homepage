// src/components/Tese.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const Tese = () => {
  return (
    // A seção agora tem seu próprio espaçamento vertical para criar o efeito de "bloco"
    <motion.section 
      id="tese" 
      className="w-full py-24 sm:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      {/* O conteúdo é centralizado e contido */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <Heading as="h2" className="text-3xl">
          O Paradigma "Intelligence-First"
        </Heading>
        <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
          O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
        </p>
      </div>
    </motion.section>
  );
};

export default Tese;