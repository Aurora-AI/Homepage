// src/components/Tese.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const Tese = () => {
  return (
    <section id="tese">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem */}
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/23.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Coluna do Texto */}
          <div className="text-center md:text-left">
            <Heading as="h2">
              O Paradigma "Intelligence-First"
            </Heading>
            <p className="mt-4 text-slate-300 text-lg">
              O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do seu negócio.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Tese;