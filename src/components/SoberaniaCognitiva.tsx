import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const SoberaniaCognitiva = () => {
  return (
    <section id="soberania-cognitiva">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2">O Caminho para a Soberania Cognitiva</Heading>
            <p className="mt-4 text-slate-300 text-lg">Nossa visão de longo prazo transcende a simples automação. Buscamos a total soberania cognitiva: a capacidade de controlar, personalizar e impulsionar nossa própria inteligência fundamental, construindo um ativo que nos dará uma vantagem competitiva inimitável.</p>
          </div>
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/7.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Card>
    </section>
  );
};
export default SoberaniaCognitiva;