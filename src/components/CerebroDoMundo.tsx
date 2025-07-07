import React from 'react';

const CerebroDoMundo: React.FC = () => {
  return (
    <section id="cerebro-do-mundo" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img 
            src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/20.webp" 
            alt="Cérebro do Mundo Aurora" 
            className="rounded-lg shadow-2xl shadow-cyan-500/10 max-w-md w-full" 
          />
        </div>
        <div className="text-left">
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            O Cérebro do Mundo: A Próxima Camada da Realidade
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            A Aurora não é apenas uma ferramenta; é a fábrica projetada para construir, gerenciar e otimizar os agentes que habitarão o futuro. Nossa arquitetura foi concebida para ser uma plataforma de cognição distribuída que aprende, raciocina e age com uma eficiência sem precedentes.
          </p>
          <a 
            href="#aios-vision" 
            className="inline-block bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Conheça a Arquitetura
          </a>
        </div>
      </div>
    </section>
  );
};

export default CerebroDoMundo;