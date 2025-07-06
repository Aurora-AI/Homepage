// src/components/EficienciaRadical.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const EficienciaRadical = () => {
  return (
    <motion.section 
      id="eficiencia-radical" 
      className="w-full py-24 sm:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <Heading as="h2">A Arquitetura da Eficiência Radical</Heading>
          <Heading as="h3" className="mt-2 text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Delegação por Incompletude Semântica
          </Heading>
          <p className="mt-6 text-lg leading-8 text-aurora-text-secondary max-w-4xl mx-auto">
            A era da IA chegou, mas com um paradigma de força bruta: enviar volumes massivos de dados para nuvens caras, criando um gargalo de latência, custo e privacidade. Na Aurora, acreditamos que a verdadeira inteligência é sobre precisão. Não usamos um canhão para resolver um problema que exige um bisturi.
          </p>
        </div>
        <div className="mt-16 w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-cyan-500/20">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
        {/* Aqui podemos adicionar os exemplos de aplicação, se necessário */}
      </div>
    </motion.section>
  );
};

export default EficienciaRadical;