// src/components/Tecnologia.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';

const Tecnologia = () => {
  return (
    <section id="tecnologia">
      <Card>
        <div className="text-center">
          <Heading as="h2">A Sinfonia da Inteligência: A Engenharia por Trás da Aurora</Heading>
          <p className="mt-4 text-aurora-text-secondary text-lg">
            Na Aurora, não tratamos a IA como um simples recurso, mas como uma arte. Nós esculpimos a inteligência, inspirados pelos princípios da otimização extrema. Onde outros usam a força bruta, nós orquestramos uma coreografia de modelos, dados e decisões.
          </p>
           {/* Outros pilares desta seção podem ser adicionados aqui */}
        </div>
      </Card>
    </section>
  );
};
export default Tecnologia;