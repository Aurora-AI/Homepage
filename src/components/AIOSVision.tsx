import React from 'react';
import { motion } from 'framer-motion';

const IconFactory = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21l16.5-6.75L20.25 21H3.75zM12 4.5l8.25 6.75-8.25 6.75m0-13.5l-8.25 6.75 8.25 6.75M12 4.5v16.5" />
    </svg>
);
const IconBrainCircuit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75V3m0 0h.008v.008H9V3zm2.25 0V3m0 0h.008v.008h-.008V3zM15 3.75V3m0 0h.008v.008H15V3zm2.25 0V3m0 0h.008v.008h-.008V3zM21 4.5V4.5m0 0h.008v.008H21V4.5zM2.25 4.5V4.5m0 0h.008v.008H2.25V4.5zM15 21a3 3 0 11-6 0 3 3 0 016 0zm-3 0o0 1.5-.75 2.25M17.25 15v1.5m0 0h.008v.008H17.25V16.5zm-1.5 0v1.5m0 0h.008v.008h-.008V16.5zM3 12h1.5m0 0h.008v.008H4.5V12zM9 12h1.5m0 0h.008v.008H10.5V12zm2.25 0h1.5m0 0h.008v.008h-.008V12zm4.5 0h1.5m0 0h.008v.008h-.008V12zM15 15h.75m0 0h.008v.008H15.75V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15z" />
    </svg>
);
const IconLightningBolt = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L10.5 22.5 12 13.5H3.75z" />
    </svg>
);
const IconShieldCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.954-.14 3.864-.413 5.706C19.467 20.368 16.733 22.5 12 22.5c-4.733 0-7.467-2.132-8.587-4.794A18.02 18.02 0 013 12c0-1.954.14-3.864.413-5.706C4.533 3.632 7.267 1.5 12 1.5c4.733 0 7.467 2.132 8.587 4.794A18.02 18.02 0 0121 12z" />
    </svg>
);

const AIOSVision = () => {
  return (
    <motion.section
      id="aios-vision"
      className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            A Fábrica de Inteligência da Aurora: Criando o Futuro da IA, com a Própria IA.
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Enquanto o mercado adota a Inteligência Artificial, a Aurora a está reinventando. Não usamos IA apenas para resolver problemas; usamos IA para **criar IA**, construindo um ecossistema que irá definir a próxima fronteira da inovação.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconBrainCircuit />
              <h3 className="text-xl font-bold text-white">Meta-Inteligência: A IA que Cria a IA</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Vimos a próxima geração de automação, e é eletrizante. Mas, para a Aurora, esse é só o ponto de partida. Desenvolvemos uma **meta-inteligência** que não apenas executa, mas que projeta, otimiza e constrói novas capacidades de IA, com agilidade e assertividade inatingíveis por abordagens tradicionais.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconFactory />
              <h3 className="text-xl font-bold text-white">Arquitetura de 'Fábrica': Produtividade Disruptiva</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Transformamos o ciclo de vida do desenvolvimento de software em um processo de fabricação inteligente. Nossas "Máquinas de Geração de Insights" e "Meta-Agentes" operam em conjunto, garantindo que criamos soluções de IA com velocidades e custos que redefinem os benchmarks de mercado, ao construir o próprio processo de forma inteligente.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconLightningBolt />
              <h3 className="text-xl font-bold text-white">Eficiência Radical: Cada Token Conta</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Inspirados na otimização de hardware, aplicamos a filosofia de "comprimir gigabytes em decisões inteligentes" ao uso de LLMs. Reduzimos custos e latência ao rotear tarefas para os modelos mais eficientes, usando caches inteligentes e gerando informações "just-in-time", maximizando o valor de cada recurso computacional.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconShieldCheck />
              <h3 className="text-xl font-bold text-white">Soberania Cognitiva: O Futuro Autônomo</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Nossa visão culmina na soberania sobre a inteligência. Além de consumir APIs, estamos construindo a capacidade de desenvolver e otimizar nosso próprio **Aurora-LLM**. Isso nos dará um controle, uma personalização e uma vantagem estratégica inimitável, definindo um novo patamar de competitividade.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-cyan-200 font-medium">
            A Aurora não está construindo apenas software; estamos construindo o próprio motor que irá gerar e refinar a inteligência de uma nova era. É a **Fábrica de Inteligência**, onde a inovação é produzida de forma contínua, eficiente e autônoma.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AIOSVision;