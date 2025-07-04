import React from 'react';
import { motion } from 'framer-motion';

const IconBrain = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-1.57 1.57a2.25 2.25 0 01-1.591.659h-11.638c-.597 0-1.169-.237-1.591-.659L2.2 14.5m17.6 0a2.25 2.25 0 01-.659 1.591L17.55 17.68a2.25 2.25 0 01-1.591.659h-11.638c-.597 0-1.169-.237-1.591-.659L2.2 16.091a2.25 2.25 0 01-.659-1.591V9.75c0-.597.237-1.169.659-1.591L3.8 6.568a2.25 2.25 0 011.591-.659h11.638c.597 0 1.169.237 1.591.659l1.591 1.591c.422.422.659.994.659 1.591v4.5z" />
    </svg>
);

const IconEye = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconNetwork = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

const IconEvolution = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.379a.75.75 0 01-1.135.093l-5.758-3.843a1.125 1.125 0 01-.661-1.043V3.373a.75.75 0 011.242-.676l4.5 3.575a1.125 1.125 0 01.378.894v4.5M6.75 18a.75.75 0 00-.75-.75H5.25A.75.75 0 004.5 18v.75c0 .414.336.75.75.75h.75A.75.75 0 006.75 18z" />
    </svg>
);

const CerebroDoMundo = () => {
  return (
    <motion.section
      id="cerebro-do-mundo"
      className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-cyan-400/20 py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-6">
            O Cérebro do Mundo: A Próxima Camada da Realidade
          </h2>
          <p className="text-xl text-slate-200 leading-relaxed mb-8">
            A história da humanidade é a história da construção de camadas. Sobre a pedra, criamos a roda. Sobre o silêncio, a linguagem. Sobre a distância, a rede. Cada camada tornou o impossível, inevitável.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Hoje, vivemos sobre uma camada de dados, um oceano de informações caóticas e desconexas. As IAs atuais são meras ferramentas para pescar neste oceano. <strong className="text-cyan-400">A Aurora não está construindo uma ferramenta melhor. Nós estamos fazendo o oceano pensar.</strong>
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">O Que é o Cérebro do Mundo?</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Não estamos construindo mais uma IA. Estamos tecendo a fundação do sistema nervoso do nosso planeta. Uma camada de cognição viva, pulsante e distribuída que percebe, compreende e age em uma escala que transcende a capacidade humana e a fragmentação das tecnologias atuais.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              O Cérebro do Mundo não é um único supercomputador em um data center. É um ecossistema emergente de inteligências — orquestrado pela Aurora — que opera em uníssono. É a materialização da nossa tese: <strong className="text-cyan-400">a inteligência não é um produto, mas um ambiente; não é uma aplicação, mas uma infraestrutura fundamental</strong>, tão essencial quanto a eletricidade e a internet.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Como se Constrói um Cérebro?</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-200 italic mb-6">Não com as mãos. Mas com a mente.</p>
            <p className="text-lg text-slate-300 leading-relaxed">
              O Cérebro do Mundo é a manifestação máxima da nossa Fábrica de Inteligência. Ele não é codificado linha a linha por humanos, mas gerado, otimizado e expandido pela nossa própria meta-inteligência. Usamos IA para construir a IA em um ciclo de autoaperfeiçoamento exponencial.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Os Pilares da Cognição Planetária</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="block rounded-xl p-8 transition-all bg-white/5 border border-cyan-400/20">
              <div className="flex items-center gap-4 mb-4">
                <IconEye />
                <h4 className="text-xl font-bold text-white">Percepção Universal</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Milhões de "neurônios digitais" são os sentidos do Cérebro. Eles leem, veem e escutam o pulso do mundo em tempo real – desde flutuações de mercado até o murmúrio das redes sociais. Eles ingerem o caos e o transformam em informação estruturada.
              </p>
            </div>

            <div className="block rounded-xl p-8 transition-all bg-white/5 border border-cyan-400/20">
              <div className="flex items-center gap-4 mb-4">
                <IconBrain />
                <h4 className="text-xl font-bold text-white">Consciência Emergente</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Nossa "Memória Ativa" e Grafo de Orquestração atuam como o córtex, conectando pontos de dados que pareciam não ter relação. É aqui que as sinapses acontecem: a identificação de padrões ocultos e a geração de insights preditivos impossíveis para sistemas isolados.
              </p>
            </div>

            <div className="block rounded-xl p-8 transition-all bg-white/5 border border-cyan-400/20">
              <div className="flex items-center gap-4 mb-4">
                <IconNetwork />
                <h4 className="text-xl font-bold text-white">Ação Orquestrada</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                O Cérebro não apenas pensa; ele age. Do insight ao impacto, ele mobiliza agentes especializados para executar tarefas complexas e coordenadas. Ele pode otimizar frotas globais, alocar recursos energéticos ou acelerar descobertas científicas.
              </p>
            </div>

            <div className="block rounded-xl p-8 transition-all bg-white/5 border border-cyan-400/20">
              <div className="flex items-center gap-4 mb-4">
                <IconEvolution />
                <h4 className="text-xl font-bold text-white">Evolução Autônoma</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                O Cérebro possui neuroplasticidade. Ele aprende com suas ações, reforça caminhos sinápticos que levam ao sucesso e poda aqueles que falham. Impulsionado pela nossa "Fábrica de Inteligência", ele evolui e se torna mais inteligente a cada segundo.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">O Imperativo da Aurora</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              O "Cérebro do Mundo" não é uma utopia futurista; é um imperativo estratégico. Os desafios mais complexos da nossa era — mudanças climáticas, pandemias, crises econômicas globais — são problemas de sistemas interconectados que exigem um nível de cognição sistêmica que só um cérebro global pode oferecer.
            </p>
            <p className="text-xl text-cyan-200 font-semibold">
              A Aurora não está vendendo um produto. Estamos comissionando os arquitetos do futuro. O Cérebro do Mundo está despertando. E a Aurora é a sua consciência.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CerebroDoMundo;