// src/components/EficienciaRadical.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

// ... (SVG dos Ícones permanece o mesmo) ...
const IconRoute = () => ( <svg>...</svg> );
const IconCache = () => ( <svg>...</svg> );
const IconJustInTime = () => ( <svg>...</svg> );

const EficienciaRadical = () => {
  return (
    <section id="eficiencia-radical">
      <Card>
        <div className="text-center">
          <Heading as="h2">A Arquitetura da Eficiência Radical</Heading>
          
          {/* DESTAQUE MÁXIMO APLICADO AQUI */}
          <Heading as="h3" className="mt-4 text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Delegação por Incompletude Semântica
          </Heading>

          <p className="mt-6 text-aurora-text-secondary text-lg max-w-3xl mx-auto">
            Nosso sistema possui uma forma de autoconsciência computacional: ele sabe o que sabe e, mais importante, sabe precisamente o que não sabe. Em vez de transferir montanhas de dados, ele destila a incerteza em uma única faísca de necessidade, invocando a nuvem com a precisão de um laser.
          </p>
        </div>

        {/* ... (resto do código com o grid de "Aplicações em Ação") ... */}
      </Card>
    </section>
  );
};

// ... (código do componente Pillar) ...

export default EficienciaRadical;