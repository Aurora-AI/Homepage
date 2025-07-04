// src/components/Tese.tsx
import React from 'react';
import Card from './ui/Card'; // Importando o novo componente

const Tese = () => {
  return (
    <section id="tese">
      <Card>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-aurora-text-primary sm:text-4xl">
            O Paradigma "Intelligence-First"
          </h2>
          <p className="mt-4 text-aurora-text-secondary text-lg">
            O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento: antes de escrever uma única linha de código, usamos IA para mapear o DNA do problema. Nosso primeiro produto é sempre uma Máquina de Geração de Insights, garantindo que cada solução que construímos atenda a uma necessidade profunda e validada do mercado.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default Tese;