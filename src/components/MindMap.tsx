// src/components/MindMap.tsx
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, type Node, type Edge } from 'reactflow';
import 'reactflow/dist/style.css'; // Estilos base do React Flow
import Heading from './ui/Heading';

// Definindo os nós do mapa mental com base na sua estrutura
const initialNodes: Node[] = [
  // Nó Central
  { id: 'visao', type: 'input', data: { label: 'A Visão Aurora' }, position: { x: 0, y: 0 } },
  { id: 'visao-sub1', data: { label: 'Uma Fábrica de IA para construir um AIOS' }, position: { x: -200, y: 100 } },
  { id: 'visao-sub2', data: { label: 'Filosofia: Especialização, Alocação 70/25/5, Delegação por Incompletude Semântica' }, position: { x: 200, y: 100 } },

  // Ramo 1
  { id: 'ramo1', data: { label: 'RAMO 1: A Plataforma de Inteligência (Aurora-Core)' }, position: { x: -450, y: 250 } },
  { id: 'ramo1-sub1', data: { label: 'Fundação Robusta: Kernel v1.0 (Segurança, Escalabilidade, Confiabilidade)' }, position: { x: -650, y: 350 } },
  { id: 'ramo1-sub2', data: { label: 'Memória Ativa: Módulo de RAG (Ingestão, Armazenamento, Consulta)' }, position: { x: -450, y: 450 } },
  { id: 'ramo1-sub3', data: { label: 'Roadmap Futuro: Verticais de Negócio' }, position: { x: -250, y: 350 } },

  // Ramo 2
  { id: 'ramo2', data: { label: 'RAMO 2: A Interface com o Mundo (Aurora Homepage)' }, position: { x: 0, y: 550 } },
  { id: 'ramo2-sub1', data: { label: 'Stack de Frontend: Astro, React, Tailwind' }, position: { x: -150, y: 650 } },
  { id: 'ramo2-sub2', data: { label: 'Componentes de IA: ChatMentor.tsx, AiosSection.tsx' }, position: { x: 150, y: 650 } },
  { id: 'ramo2-sub3', data: { label: 'Agente Responsável: Vega' }, position: { x: 0, y: 750 } },

  // Ramo 3
  { id: 'ramo3', data: { label: 'RAMO 3: A Metodologia (Ferramentas da Fábrica)' }, position: { x: 450, y: 250 } },
  { id: 'ramo3-sub1', data: { label: 'Governança de Projeto: project_manager.py' }, position: { x: 250, y: 350 } },
  { id: 'ramo3-sub2', data: { label: 'Monitoramento e Análise: dashboard.py' }, position: { x: 450, y: 450 } },
  { id: 'ramo3-sub3', data: { label: 'Agente Responsável: Q' }, position: { x: 650, y: 350 } },
];

// Definindo as conexões (arestas) entre os nós
const initialEdges: Edge[] = [
  { id: 'e-visao-sub1', source: 'visao', target: 'visao-sub1', animated: true },
  { id: 'e-visao-sub2', source: 'visao', target: 'visao-sub2', animated: true },
  { id: 'e-visao-ramo1', source: 'visao', target: 'ramo1', animated: true },
  { id: 'e-visao-ramo2', source: 'visao', target: 'ramo2', animated: true },
  { id: 'e-visao-ramo3', source: 'visao', target: 'ramo3', animated: true },
  { id: 'e-ramo1-sub1', source: 'ramo1', target: 'ramo1-sub1' },
  { id: 'e-ramo1-sub2', source: 'ramo1', target: 'ramo1-sub2' },
  { id: 'e-ramo1-sub3', source: 'ramo1', target: 'ramo1-sub3' },
  { id: 'e-ramo2-sub1', source: 'ramo2', target: 'ramo2-sub1' },
  { id: 'e-ramo2-sub2', source: 'ramo2', target: 'ramo2-sub2' },
  { id: 'e-ramo2-sub3', source: 'ramo2', target: 'ramo2-sub3' },
  { id: 'e-ramo3-sub1', source: 'ramo3', target: 'ramo3-sub1' },
  { id: 'e-ramo3-sub2', source: 'ramo3', target: 'ramo3-sub2' },
  { id: 'e-ramo3-sub3', source: 'ramo3', target: 'ramo3-sub3' },
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
        </div>
        <div className="mt-16 w-full h-[80vh] rounded-2xl bg-black/20 border border-white/10 p-4 shadow-xl">
          <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              fitView
              className="aurora-mindmap"
          >
              <Controls />
              <MiniMap nodeStrokeWidth={3} zoomable pannable />
              <Background color="#444" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default MindMap;