import React from 'react';
import { motion } from 'framer-motion';

const IconCode = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M1.5 12h21" /></svg> );
const IconSpeed = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 1.5v2.25m6.364.566l-1.59 1.59M21.006 12.75h-2.25m-.566 6.364l-1.59-1.59M12 22.494v-2.25m-6.364-.566l1.59-1.59M1.5 12h2.25m.566-6.364l1.59 1.59M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> );
const IconGPS = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.885-1.343-1.611-.933L2.51 7.283a1.125 1.125 0 00-.621 1.006V16.35c0 .836.885 1.343 1.611.933l4.875-2.437ZM12 4.5a3 3 0 11-6 0 3 3 0 016 0ZM12 15.75a3 3 0 11-6 0 3 3 0 016 0Z" /></svg> );

const VantagemCompetitiva = () => {
  return (
    <motion.section
      id="vantagem-competitiva"
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Como Construímos: Nossa Vantagem Competitiva Assimétrica.
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            A Aurora não é apenas construída *com* IA; ela é construída *por* IA. Nossa metodologia e arquitetura nos permitem entregar soluções de software e inteligência de forma que desequilibra o mercado, gerando velocidade, assertividade e uma fração mínima dos custos de abordagens tradicionais.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconCode />
              <h3 className="text-xl font-bold text-white">Engenharia Impulsionada por IA</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Nossos "Meta-Agentes" são os arquitetos do nosso futuro. Eles orquestram a geração, validação e otimização de código, desde o conceito até a implementação. Isso significa que somos capazes de prototipar e lançar produtos complexos em semanas, não meses.
            </p>
          </div>

          <div className="block rounded-xl p-6 transition-all bg-white/5">
            <div className="flex items-center gap-4">
              <IconSpeed />
              <h3 className="text-xl font-bold text-white">Agilidade e Eficiência Inigualáveis</h3>
            </div>
            <p className="mt-2 text-slate-300">
              Ao usar a própria IA para criar IA, minimizamos o atrito humano e maximizamos a automação. Isso se traduz em menos custos de desenvolvimento, ciclos de inovação mais rápidos e a capacidade de testar e iterar em uma escala que seria inviável para equipes tradicionais.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-slate-700 pt-8">
          <h3 className="text-xl font-bold text-white">A Inteligência em Ação: O Aurora Negotiation GPS</h3>
          <div className="max-w-lg mx-auto mt-4 text-center">
            <div className="flex items-center gap-4 justify-center mb-4">
              <IconGPS />
              <h4 className="text-lg font-semibold text-white">Nossa primeira máquina de insights acionável.</h4>
            </div>
            <p className="text-slate-300 mb-4">
              Nossa primeira "Ferramenta" é um sistema proativo para equipes de vendas e jurídicas. O "GPS de Negociação" não apenas armazena dados de CRM; ele lê e compreende e-mails e transcrições para identificar automaticamente **Pontos de Dor**, **Objeções do Cliente** e **Compromissos assumidos**.
            </p>
            <p className="text-slate-300">
              Com base nisso e em uma base de conhecimento de metodologias de sucesso, ele sugere a "Próxima Melhor Ação", transformando vendedores em estrategistas de elite e advogados proativos, impulsionando a eficiência e o fechamento de negócios.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VantagemCompetitiva;