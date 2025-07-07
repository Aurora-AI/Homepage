// Caminho do arquivo: src/components/Arquitetura.tsx

import React from 'react';
import { Zap } from 'lucide-react';

const Arquitetura: React.FC = () => {
  return (
    <section id="arquitetura" className="text-center">
      <div className="flex justify-center items-center gap-4 mb-4">
        <Zap className="w-10 h-10 text-purple-400" />
        <h2 className="text-3xl font-bold text-purple-300">A Sinfonia da Inteligência</h2>
      </div>
      <p className="max-w-3xl mx-auto text-lg text-slate-300">
        Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões. Cada agente, do menor SLM ao mais poderoso LLM, tem seu papel, tocando sua nota no momento exato para criar uma composição de eficiência e insight que é maior que a soma de suas partes.
      </p>
    </section>
  );
};

export default Arquitetura;