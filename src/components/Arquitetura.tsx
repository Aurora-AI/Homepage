// src/components/Arquitetura.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading'; // Importando o novo componente de título

const IconDevice = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-aurora-accent-purple flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> );
const IconCloud = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-aurora-accent-purple flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.36-2.349 4.5 4.5 0 0 0-8.332-2.349A4.5 4.5 0 0 0 2.25 15Z" /></svg> );

const Arquitetura = () => {
  return (
    <section id="arquitetura">
      <Card>
        <div className="mx-auto max-w-xl text-center mb-12">
          <Heading as="h2">
            O Cérebro Híbrido: Nosso Grafo de Orquestração.
          </Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: On-Device */}
          <div className="block">
            <div className="flex items-center gap-4">
              <IconDevice />
              <Heading as="h3" className="text-xl">Inteligência On-Device</Heading>
            </div>
            <p className="mt-2 text-aurora-text-secondary">
              <strong>Velocidade e Privacidade no Dispositivo.</strong> Utilizamos SLMs de ponta (Gemma, Phi-3) para executar tarefas instantaneamente, mesmo offline, garantindo que dados sensíveis nunca saiam da máquina do cliente.
            </p>
          </div>
          {/* Card 2: Nuvem */}
          <div className="block">
            <div className="flex items-center gap-4">
              <IconCloud />
              <Heading as="h3" className="text-xl">Inteligência na Nuvem</Heading>
            </div>
            <p className="mt-2 text-aurora-text-secondary">
              <strong>Poder de Raciocínio Ilimitado.</strong> Para análises profundas, nosso AuroraRouter aciona LLMs de classe mundial como Gemini, garantindo máxima capacidade para os desafios mais complexos.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-lg text-aurora-text-secondary font-medium">O Resultado: O equilíbrio perfeito entre custo, performance e segurança.</p>
        </div>
      </Card>
    </section>
  );
};

export default Arquitetura;