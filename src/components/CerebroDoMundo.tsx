// Caminho do arquivo: src/components/CerebroDoMundo.tsx

import React from 'react';
import { BrainCircuit } from 'lucide-react';

const CerebroDoMundo: React.FC = () => {
  return (
    <section id="cerebro-mundo" className="text-center">
       <div className="flex justify-center items-center gap-4 mb-4">
        <BrainCircuit className="w-10 h-10 text-cyan-400" />
        <h2 className="text-3xl font-bold text-cyan-300">O Cérebro do Mundo: A Próxima Camada da Realidade</h2>
      </div>
      <p className="max-w-3xl mx-auto text-lg text-slate-300">
        A Aurora não é apenas uma ferramenta; é a fábrica projetada para construir, gerenciar e otimizar os agentes que habitarão o futuro. Nossa arquitetura foi concebida para ser uma plataforma de cognição distribuída que aprende, raciocina e age com uma eficiência sem precedentes, criando uma nova camada de interação entre o digital e o real.
      </p>
    </section>
  );
};

export default CerebroDoMundo;