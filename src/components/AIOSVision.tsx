// Caminho do arquivo: src/components/AIOSVision.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ChatExample from './ChatExample';

// Variantes para a animação em cascata
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // Atraso entre a animação de cada filho
      delayChildren: 1.5,   // Atraso inicial antes de começar a animar os filhos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const AIOSVision: React.FC = () => {
  return (
    <section id="aios" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4">
      {/* Vídeo de Fundo */}
      <video
        src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />

      {/* Container de Conteúdo com Animação em Cascata */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 container mx-auto max-w-4xl text-center space-y-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300">
            A Arquitetura Cognitiva da Aurora
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="text-lg md:text-xl text-slate-200 space-y-4">
          <p>
            Aplicações que simplesmente consomem APIs representam o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
           <h3 className="text-2xl md:text-3xl font-semibold pt-4 pb-2 text-cyan-200">
            Delegação por Incompletude Semântica
          </h3>
          <p className="text-lg md:text-xl text-slate-300">
            O pilar da nossa eficiência é a inteligência hierárquica. Um SLM ultrarrápido no seu dispositivo lida com 95% do trabalho e, quando encontra uma "incompletude semântica", faz uma micro-pergunta cirúrgica ao nosso cérebro central na nuvem, o Gemini 1.5 Pro.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ChatExample />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AIOSVision;