import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const AIOSVision = () => {
  return (
    <section id="aios-vision">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/13.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center md:text-left">
            <Heading as="h2">A Fábrica de Inteligência da Aurora</Heading>
            <p className="mt-4 text-slate-300 text-lg">Enquanto o mercado adota a Inteligência Artificial, a Aurora a está reinventando. Não usamos IA apenas para resolver problemas; usamos IA para criar IA, construindo um ecossistema que irá definir a próxima fronteira da inovação.</p>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default AIOSVision;