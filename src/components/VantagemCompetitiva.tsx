import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const VantagemCompetitiva = () => {
  return (
    <section id="vantagem-competitiva">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2">Nossa Vantagem Competitiva Assimétrica</Heading>
            <p className="mt-4 text-slate-300 text-lg">A Aurora não é apenas construída com IA; ela é construída por IA. Nossa metodologia e arquitetura nos permitem entregar soluções de software e inteligência de forma que desequilibra o mercado, gerando velocidade, assertividade e uma fração mínima dos custos de abordagens tradicionais.</p>
          </div>
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/16.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Card>
    </section>
  );
};
export default VantagemCompetitiva;