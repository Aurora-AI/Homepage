// src/components/EficienciaRadical.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

// Ícones SVG para as aplicações
const IconChat = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-aurora-accent-purple"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const IconGavel = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-aurora-accent-purple"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg> );
const IconFactory = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-aurora-accent-purple"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" /></svg> );

// Componente auxiliar para os pilares
const Pillar = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 pt-1">{icon}</div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="mt-1 text-sm text-aurora-text-secondary">{description}</p>
    </div>
  </div>
);

const EficienciaRadical = () => {
  const videoUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4';
  
  return (
    <motion.section id="eficiencia-radical">
      <Card>
        <div className="text-center">
          <Heading as="h2">A Arquitetura da Eficiência Radical</Heading>
          <Heading as="h3" className="mt-2 text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Delegação por Incompletude Semântica
          </Heading>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <p className="text-lg leading-8 text-aurora-text-secondary">
              A era da IA chegou com um paradigma de força bruta. Nós não usamos um canhão para resolver um problema que exige um bisturi. Nosso sistema sabe o que sabe e, mais importante, o que não sabe. Em vez de transferir montanhas de dados, ele envia uma única "faísca de necessidade" à nossa rede global, invocando a sabedoria da nuvem com a precisão de um laser.
            </p>
          </div>
          <div className="lg:col-span-3 w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline src={videoUrl} />
          </div>
        </div>

        <div className="mt-16">
          <Heading as="h3" className="text-center text-xl mb-10">Aplicações em Ação</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Pillar icon={<IconChat />} title="Comunicação Global" description="Chat com tradução em tempo real, eliminando barreiras de idioma." />
            <Pillar icon={<IconGavel />} title="Análise Jurídica" description="Revisão de contratos em segundos, consultando a nuvem apenas para cláusulas ambíguas." />
            <Pillar icon={<IconFactory />} title="Manufatura 4.0" description="Diagnóstico preditivo ao analisar dados de sensores localmente e consultar anomalias." />
            {/* Outros pilares podem ser adicionados aqui */}
          </div>
        </div>
      </Card>
    </motion.section> // CORREÇÃO: Tag </motion.section> devidamente fechada.
  );
};

export default EficienciaRadical;