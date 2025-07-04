import React from 'react';
import { motion } from 'framer-motion';

const IconBrain = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> );
const IconKnowledge = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-4.5M8.25 21v-7.5M3 12l9-9 9 9M3 12h18" /></svg> );
const IconCrown = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3v1.5m-3-4.5V5.25m3 0H15M4.5 5.25a3 3 0 00-3 3v1.5m3-4.5V5.25m-3 0H6M6 16.5V15a3 3 0 00-3-3H2.25M6 16.5h15m-15 0a2.25 2.25 0 00-2.25 2.25v2.25m17.25-4.5a2.25 2.25 0 00-2.25 2.25v2.25M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> );

const SoberaniaCognitiva = () => {
  return (
    <motion.section
      id="soberania-cognitiva"
      className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            O Caminho para a Soberania Cognitiva
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Nossa visão de longo prazo transcende a simples automação ou o consumo de modelos prontos. Buscamos a total soberania cognitiva: a capacidade de controlar, personalizar e impulsionar nossa própria inteligência fundamental, construindo um ativo que nos dará uma vantagem competitiva inimitável.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="flex items-start gap-4">
            <IconBrain />
            <div>
              <h3 className="text-xl font-bold text-white">Treinamento Contínuo e Propagação do Conhecimento</h3>
              <p className="mt-2 text-slate-300">
                Cada interação, cada problema resolvido, cada insight gerado pela nossa Fábrica de Inteligência alimenta diretamente nossa base de conhecimento proprietária. Isso não é um banco de dados estático; é um organismo vivo que aprende e se aprofunda a cada nova inteligência criada.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconKnowledge />
            <div>
              <h3 className="text-xl font-bold text-white">O Dataset Proprietário: A Vantagem Secreta</h3>
              <p className="mt-2 text-slate-300">
                A riqueza, complexidade e especificidade dos dados gerados e organizados internamente pela Aurora formam um dataset insuperável. É este ativo que nos permitirá, no futuro próximo, treinar o nosso próprio Modelo de Linguagem Fundamental (LLM) da Aurora, um cérebro especialista, otimizado e exclusivo para o nosso domínio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <IconCrown />
            <div>
              <h3 className="text-xl font-bold text-white">O Aurora-LLM: O Ativo Inimitável</h3>
              <p className="mt-2 text-slate-300">
                Com o Aurora-LLM, não seremos meros consumidores de APIs, mas os arquitetos da nossa própria inteligência. Isso nos dará controle total sobre performance, custos, segurança e, mais importante, a capacidade de inovar em direções que são intrínsecas à nossa visão, garantindo uma liderança tecnológica perene.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-cyan-200 font-medium">
            Esta é a jornada da Aurora: de pioneiros da Inteligência-Primeiro a arquitetos da Soberania Cognitiva, redefinindo o que é possível com a IA.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default SoberaniaCognitiva;