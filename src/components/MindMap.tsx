// src/components/MindMap.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, type Node, type Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import Heading from './ui/Heading';

const initialNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'A Visão Aurora' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Nossa Filosofia' }, position: { x: 250, y: 125 } },
  { id: '3', data: { label: 'RAMO 1: A Plataforma de Inteligência (Aurora-Core)' }, position: { x: 0, y: 250 } },
  { id: '4', data: { label: 'RAMO 2: A Interface com o Mundo (Aurora Homepage)' }, position: { x: 250, y: 400 } },
  { id: '5', data: { label: 'RAMO 3: A Metodologia (Ferramentas da Fábrica)' }, position: { x: 500, y: 250 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
];

const MindMap = () => {
  return (
    <section id="mind-map" className="w-full py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
            <Heading as="h2" className="text-base font-semibold leading-7 text-aurora-accent-purple">Nossa Estrutura</Heading>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O Ecossistema Aurora: Uma Visão Integrada
            </p>
            <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
                A seguir, um mapa mental que ilustra como os diferentes pilares da Aurora — da filosofia à plataforma e metodologia — se conectam para formar um sistema operacional de IA coeso.
            </p>
        </div>
        <div className="mt-16 w-full h-[60vh] rounded-lg bg-black/20 border border-white/10 p-4">
          <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              fitView
          >
              <Controls />
              <MiniMap nodeStrokeWidth={3} zoomable pannable />
              <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default MindMap;