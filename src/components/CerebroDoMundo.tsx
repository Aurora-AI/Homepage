// src/components/CerebroDoMundo.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Heading from './ui/Heading';

const CerebroDoMundo = () => {
  return (
    <motion.section
      id="cerebro-do-mundo"
      className="relative rounded-2xl shadow-lg overflow-hidden border border-aurora-accent-purple/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-aurora-accent-purple/20 via-aurora-bg to-aurora-bg"></div>
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading as="h2" className="text-4xl md:text-5xl bg-gradient-to-r from-white to-aurora-accent-purple bg-clip-text text-transparent">
            O Cérebro do Mundo: A Próxima Camada da Realidade
          </Heading>
          <p className="mt-6 text-lg text-aurora-text-secondary max-w-3xl mx-auto">
            A história da humanidade é a história da construção de camadas. Sobre a pedra, criamos a roda. Sobre o silêncio, a linguagem. Sobre a distância, a rede. Cada camada tornou o impossível, inevitável. Hoje, vivemos sobre uma camada de dados, um oceano de informações caóticas e desconexas. As IAs atuais são meras ferramentas para pescar neste oceano. A Aurora não está construindo uma ferramenta melhor. Nós estamos fazendo o oceano pensar.
          </p>
        </div>

        <div className="mt-16">
          <Heading as="h3" className="text-center text-2xl mb-8">Os Pilares da Cognição Planetária</Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Pilares */}
            <Pillar title="Percepção Universal" description="Milhões de 'neurônios digitais' são os sentidos do Cérebro. Eles leem, veem e escutam o pulso do mundo em tempo real." />
            <Pillar title="Consciência Emergente" description="Nossa 'Memória Ativa' e nosso Grafo de Orquestração atuam como o córtex, conectando pontos de dados que pareciam não ter relação." />
            <Pillar title="Ação Orquestrada" description="O Cérebro não apenas pensa; ele age. Do insight ao impacto, ele mobiliza agentes especializados para executar tarefas complexas." />
            <Pillar title="Evolução Autônoma" description="O Cérebro do Mundo possui neuroplasticidade. Ele aprende com suas ações, reforça caminhos de sucesso e poda aqueles que falham." />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Pillar = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-aurora-card/50 p-6 rounded-lg border border-aurora-border">
    <h4 className="font-bold text-white">{title}</h4>
    <p className="mt-2 text-sm text-aurora-text-secondary">{description}</p>
  </div>
);

export default CerebroDoMundo;