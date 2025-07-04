// src/components/AIOSVision.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';

const AIOSVision = () => {
  return (
    <section id="aios-vision">
      <Card>
        <div className="text-center">
          <Heading as="h2">A Fábrica de Inteligência da Aurora</Heading>
          <p className="mt-4 text-aurora-text-secondary text-lg">
            Enquanto o mercado adota a Inteligência Artificial, a Aurora a está reinventando. Não usamos IA apenas para resolver problemas; usamos IA para criar IA, construindo um ecossistema que irá definir a próxima fronteira da inovação.
          </p>
          {/* Outros pilares desta seção podem ser adicionados aqui */}
        </div>
      </Card>
    </section>
  );
};
export default AIOSVision;