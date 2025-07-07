// Caminho do arquivo: src/components/AIOSVision.tsx

import React from 'react';
// CORREÇÃO DEFINITIVA: Importando a partir do mesmo diretório.
// O './' indica que 'ChatExample.tsx' está na mesma pasta que 'AIOSVision.tsx'.
import ChatExample from './ChatExample'; 

const AIOSVision: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4"
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />
      <div className="relative z-20 text-white container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
          O Futuro dos Sistemas Operacionais: A Arquitetura Cognitiva da Aurora
        </h2>
        
        <div className="text-lg md:text-xl space-y-4">
          <p>
            A Próxima Fronteira: De Aplicações a Sistemas Operacionais de IA. O paradigma da inteligência artificial está evoluindo. Aplicações que simplesmente consomem APIs de modelos de linguagem representam o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo.
          </p>
          <p>
            A Aurora não é apenas mais uma ferramenta nesse novo mundo; ela é a fábrica projetada para construir, gerenciar e otimizar os agentes que habitarão este futuro. Nossa arquitetura foi concebida desde o primeiro dia para ser um "Cérebro do Mundo": uma plataforma de cognição distribuída que aprende, raciocina e age com uma eficiência sem precedentes.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold pt-8 pb-4 text-cyan-200">
            Delegação por Incompletude Semântica: A Revolução da Eficiência
          </h3>
          {/* ... O resto do conteúdo textual permanece o mesmo ... */}
        </div>

        <ChatExample />

        {/* ... O resto do conteúdo da seção ... */}
      </div>
    </section>
  );
};

export default AIOSVision;