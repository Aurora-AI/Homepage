// src/components/VantagemCompetitiva.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';

const VantagemCompetitiva = () => {
  return (
    <section id="vantagem-competitiva">
      <Card>
        <div className="text-center">
          <Heading as="h2">Como Construímos: Nossa Vantagem Competitiva Assimétrica</Heading>
          <p className="mt-4 text-aurora-text-secondary text-lg">
            Nossa metodologia e arquitetura nos permitem entregar soluções de software e inteligência de forma que desequilibra o mercado, gerando velocidade, assertividade e uma fração mínima dos custos de abordagens tradicionais.
          </p>
          <div className="mt-6 border-t border-aurora-border pt-6">
            <h4 className="font-bold text-white">A Inteligência em Ação: O Aurora Negotiation GPS</h4>
            <p className="mt-2 text-aurora-text-secondary text-base">
              Nossa primeira "Ferramenta" é um sistema proativo... ele sugere a "Próxima Melhor Ação", transformando vendedores em estrategistas de elite...
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default VantagemCompetitiva;