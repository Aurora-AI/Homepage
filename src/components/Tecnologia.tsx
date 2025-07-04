import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const Tecnologia = () => {
  return (
    <section id="tecnologia">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/4.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center md:text-left">
            <Heading as="h2">A Sinfonia da Inteligência</Heading>
            <p className="mt-4 text-slate-300 text-lg">Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Nós esculpimos a inteligência, inspirados pelos princípios da otimização extrema. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões.</p>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default Tecnologia;