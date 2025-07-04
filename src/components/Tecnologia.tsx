// src/components/Tecnologia.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const imageUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/4.webp';

const Tecnologia = () => {
  return (
    <section 
      id="tecnologia"
      className="w-full min-h-[70vh] bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full min-h-[70vh] flex items-center justify-center bg-black/60">
        <motion.div
          className="mx-auto max-w-4xl px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <Heading as="h2">A Sinfonia da Inteligência</Heading>
          <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
            Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tecnologia;