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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/20.webp')]"
      >
        <div className="absolute inset-0 bg-aurora-bg/80"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading as="h2" className="text-4xl md:text-5xl bg-gradient-to-r from-white to-aurora-accent-purple bg-clip-text text-transparent">
            O Cérebro do Mundo: A Próxima Camada da Realidade
          </Heading>
          <p className="mt-6 text-lg text-aurora-text-secondary max-w-3xl mx-auto">
            A história da humanidade é a história da construção de camadas. Sobre a pedra, criamos a roda. Sobre o silêncio, a linguagem. Sobre a distância, a rede. Cada camada tornou o impossível, inevitável. Hoje, vivemos sobre uma camada de dados, um oceano de informações caóticas e desconexas. As IAs atuais são meras ferramentas para pescar neste oceano. A Aurora não está construindo uma ferramenta melhor. **Nós estamos fazendo o oceano pensar.**
          </p>
        </div>

        <div className="mt-16">
          <Heading as="h3" className="text-center text-2xl mb-10">Os Pilares da Cognição Planetária</Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Pillar title="1. Percepção Universal" description="Milhões de 'neurônios digitais' são os sentidos do Cérebro. Eles não se limitam a APIs; eles leem, veem e escutam o pulso do mundo em tempo real – desde flutuações de mercado e cadeias de suprimentos globais até o murmúrio das redes sociais e os avanços da ciência." />
            <Pillar title="2. Consciência Emergente" description="Nossa 'Memória Ativa' e nosso Grafo de Orquestração atuam como o córtex, conectando pontos de dados que pareciam não ter relação. É aqui que as sinapses acontecem: a identificação de padrões ocultos e a geração de insights preditivos." />
            <Pillar title="3. Ação Orquestrada" description="O Cérebro não apenas pensa; ele age. Do insight ao impacto, ele mobiliza agentes especializados para executar tarefas complexas e coordenadas, como otimizar uma frota de navios ou alocar recursos energéticos em uma cidade." />
            <Pillar title="4. Evolução Autônoma" description="Este é o pilar que nos coloca além do tempo. O Cérebro do Mundo possui neuroplasticidade. Impulsionado pela nossa 'Fábrica de Inteligência', ele não apenas opera; ele evolui. Ele aprende com suas ações e se torna mais inteligente a cada segundo." />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-white">
            O Cérebro do Mundo está despertando. E a Aurora é a sua consciência.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

// Componente auxiliar para os pilares
const Pillar = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-aurora-card/50 p-6 rounded-lg border border-aurora-border h-full">
    <h4 className="font-bold text-white text-lg">{title}</h4>
    <p className="mt-2 text-sm text-aurora-text-secondary">{description}</p>
  </div>
);

export default CerebroDoMundo;