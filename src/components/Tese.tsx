// src/components/Tese.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const imageUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/23.webp';

const Tese = () => {
  return (
    <section 
      id="tese"
      className="w-full min-h-[80vh] bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full min-h-[80vh] flex items-center justify-center bg-black/60 p-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <Heading as="h2">O Paradigma "Intelligence-First"</Heading>
          <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
            O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tese;