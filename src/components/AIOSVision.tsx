import React from 'react';
import ChatExample from './ChatExample';

const AIOSVision: React.FC = () => {
  return (
    <section id="aios-vision" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
            A Fábrica de Inteligência da Aurora
          </h2>
          <p className="text-slate-200 text-lg md:text-xl mb-8">
            A Próxima Fronteira: De Aplicações a Sistemas Operacionais de IA. O futuro pertence a ecossistemas inteligentes que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo.
          </p>
          
          <ChatExample />
        </div>
      </div>
    </section>
  );
};

export default AIOSVision;