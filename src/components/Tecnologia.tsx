import React from 'react';
import { motion } from 'framer-motion';

// Ícones para os pilares da tecnologia
const IconBrainCircuit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75V3m0 0h.008v.008H9V3zm2.25 0V3m0 0h.008v.008h-.008V3zM15 3.75V3m0 0h.008v.008H15V3zm2.25 0V3m0 0h.008v.008h-.008V3zM21 4.5V4.5m0 0h.008v.008H21V4.5zM2.25 4.5V4.5m0 0h.008v.008H2.25V4.5zM15 21a3 3 0 11-6 0 3 3 0 016 0zm-3 0o0 1.5-.75 2.25M17.25 15v1.5m0 0h.008v.008H17.25V16.5zm-1.5 0v1.5m0 0h.008v.008h-.008V16.5zM3 12h1.5m0 0h.008v.008H4.5V12zM9 12h1.5m0 0h.008v.008H10.5V12zm2.25 0h1.5m0 0h.008v.008h-.008V12zm4.5 0h1.5m0 0h.008v.008h-.008V12zM15 15h.75m0 0h.008v.008H15.75V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15zm-1.5 0h.75m0 0h.008v.008h-.008V15z" />
    </svg>
);
const IconLayerStack = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125V16.5m0 0H21.75m0 0V7.125m0 9.375L17.25 7.125M6.75 16.5L11.25 7.125M7.5 8.25L12 1.5l4.5 6.75-4.5 6.75L7.5 8.25z" />
    </svg>
);
const IconDatabase = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V5.25c0-2.278 3.694-4.125 8.25-4.125s8.25 1.847 8.25 4.125v1.125zm0 0H3.75m16.5 0v2.25m0 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V9.75m8.25 4.125c-4.556 0-8.25-1.847-8.25-4.125v7.5c0 2.278 3.694 4.125 8.25 4.125s8.25-1.847 8.25-4.125V11.25m0 0H3.75" />
    </svg>
);
const IconRocket = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.379a.75.75 0 01-1.135.093l-5.758-3.843a1.125 1.125 0 01-.661-1.043V3.373a.75.75 0 011.242-.676l4.5 3.575a1.125 1.125 0 01.378.894v4.5M6.75 18a.75.75 0 00-.75-.75H5.25A.75.75 0 004.5 18v.75c0 .414.336.75.75.75h.75A.75.75 0 006.75 18zm10.5-4.5a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V13.5zm2.25 4.5a.75.75 0 00-.75-.75H18a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V18zm2.25-4.5a.75.75 0 00-.75-.75H20.25a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V13.5zM15 18.75a.75.75 0 00-.75-.75H13.5a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V18.75zM11.25 18a.75.75 0 00-.75-.75H9.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V18zm-.75-4.5a.75.75 0 00-.75-.75H8.25a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V13.5z" />
    </svg>
);

const Tecnologia = () => {
  return (
    <motion.section
      id="tecnologia"
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            A Essência da Aurora: Engenharia de IA Otimizada
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Enquanto o mundo se adapta à era da inteligência artificial, a Aurora está na vanguarda, não apenas usando IA, mas usando-a para *criar IA*. Nossa abordagem é radicalmente diferente: aplicamos os princípios da engenharia de otimização de máquinas gráficas para esculpir sistemas de IA de alta performance, baixo custo e agilidade sem precedentes. É o que chamamos de 'comprimir gigabytes em decisões inteligentes'.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconBrainCircuit />
              <h3 className="text-xl font-bold text-white">Inteligência Orquestrada: O Grafo de Decisão</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Assim como um chip gráfico gerencia complexas operações de renderização, nosso 'Grafo de Orquestração' é o cérebro que decide onde e como a inteligência é processada. Ele analisa cada requisição e a roteia de forma inteligente para a camada mais eficiente, garantindo a capacidade computacional exata necessária e evitando gastos desnecessários.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconLayerStack />
              <h3 className="text-xl font-bold text-white">Poder Local e Global: A Cascata de Modelos</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Nossa arquitetura usa uma cascata de 'Micro' e 'Nano' LLMs (como Phi-3, Gemma, Mistral 7B) que operam localmente para tarefas rotineiras, oferecendo respostas instantâneas e personalizadas. Apenas as requisições mais complexas são encaminhadas para LLMs de classe mundial na nuvem, otimizando drasticamente o custo e a performance.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconDatabase />
              <h3 className="text-xl font-bold text-white">Dados em Movimento Inteligente: Cache e Geração Dinâmica</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Inspirados na otimização de VRAM, evitamos 'pagar' por dados que não são essenciais. Utilizamos um cache semântico avançado para o reuso de conhecimento e a 'Geração Procedural' para que, em vez de armazenar respostas estáticas, nossos sistemas gerem informações no momento da necessidade, baseados em regras e dados leves.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconRocket />
              <h3 className="text-xl font-bold text-white">A Próxima Fronteira: Acelerando o Desenvolvimento de IA com IA</h3>
            </div>
            <p className="mt-2 text-slate-300">
              O verdadeiro diferencial da Aurora é usar nossa própria inteligência para aprimorar o ciclo de vida de desenvolvimento de IA. Nossas 'Máquinas de Geração de Insights' alimentam o processo desde o diagnóstico do problema até a otimização de modelos, permitindo construir soluções com velocidade, assertividade e fração de custo inatingíveis por abordagens tradicionais.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-cyan-200 font-medium">
            Esta fusão de engenharia de ponta e inteligência autônoma posiciona a Aurora não apenas como um fornecedor, mas como um parceiro estratégico que capacita empresas a antecipar o futuro, inovar com agilidade e operar com uma eficiência que redefine o cenário competitivo.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Tecnologia;