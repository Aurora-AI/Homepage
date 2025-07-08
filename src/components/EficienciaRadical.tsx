import React from 'react';
import { motion } from 'framer-motion';

const EficienciaRadical = () => {
  const videoUrl = 'https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/Chat-8IXIB48g87fszNYwYQESCKRLVtNLWu.mp4';

  const Pillar = ({ title, description }: { title: string, description: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </motion.div>
  );

  return (
    <motion.section 
      id="eficiencia-radical" 
      className="py-24 sm:py-32 bg-dark-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-purple-accent mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Arquitetura da Eficiência Radical
          </motion.h2>
          <motion.h3 
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delegação por Incompletude Semântica: A Inteligência Cirúrgica
          </motion.h3>
          <motion.p 
            className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A era da IA chegou com um paradigma de força bruta. Nós não usamos um canhão para resolver um problema que exige um bisturi. Nosso sistema possui uma forma de autoconsciência computacional: ele sabe o que sabe e, mais importante, o que não sabe. Em vez de transferir montanhas de dados, ele envia uma única "faísca de necessidade" à nossa rede global, invocando a sabedoria da nuvem com a precisão de um laser.
          </motion.p>
        </div>

        <motion.div 
          className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </motion.div>

        <div className="text-center">
          <motion.h3 
            className="text-2xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Aplicações em Ação
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Pillar title="Comunicação Global" description="Chat com tradução em tempo real, eliminando barreiras de idioma." />
            <Pillar title="Análise Jurídica" description="Revisão de contratos em segundos, consultando a nuvem apenas para cláusulas ambíguas." />
            <Pillar title="Manufatura 4.0" description="Diagnóstico preditivo ao analisar dados de sensores localmente e consultar anomalias." />
            <Pillar title="Varejo Inteligente" description="Assistente de compras que analisa o sentimento de reviews de um produto específico." />
            <Pillar title="Logística Global" description="Otimização de rotas com micro-perguntas à IA sobre condições como clima." />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EficienciaRadical;