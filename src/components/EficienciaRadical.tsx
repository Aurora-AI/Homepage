// src/components/EficienciaRadical.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const EficienciaRadical = () => {
  const videoUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4';

  return (
    <section 
      id="eficiencia-radical"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Vídeo de Fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay Escuro para Legibilidade */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Conteúdo de Texto */}
      <motion.div
        className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Heading as="h2">A Arquitetura da Eficiência Radical</Heading>
        <Heading as="h3" className="mt-2 text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Delegação por Incompletude Semântica
        </Heading>
        <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
          A era da IA chegou, mas com um paradigma de força bruta. Nós não usamos um canhão para resolver um problema que exige um bisturi. Nosso sistema sabe o que sabe e, mais importante, o que não sabe. Em vez de transferir montanhas de dados, ele envia uma única "faísca de necessidade" à nossa rede global, invocando a sabedoria da nuvem com a precisão de um laser.
        </p>
      </motion.div>
    </section>
  );
};

export default EficienciaRadical;