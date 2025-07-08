import React from 'react';
import { motion } from 'framer-motion';

const AIOSVision = () => {
  return (
    <motion.section 
      id="aios-vision"
      className="py-24 sm:py-32 bg-dark-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              A Fábrica de Inteligência da Aurora: Criando o Futuro da IA, com a Própria IA.
            </h2>
            <p className="text-lg leading-8 text-slate-300 mb-8">
              Enquanto o mercado adota a Inteligência Artificial, a Aurora a está reinventando. Não usamos IA apenas para resolver problemas; usamos IA para criar IA, construindo um ecossistema que irá definir a próxima fronteira da inovação.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-accent pl-6">
                <h3 className="text-lg font-semibold text-white">Meta-Inteligência: A IA que Cria a IA</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Desenvolvemos uma meta-inteligência que não apenas executa, mas que projeta, otimiza e constrói novas capacidades de IA, com agilidade e assertividade inatingíveis por abordagens tradicionais.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-accent pl-6">
                <h3 className="text-lg font-semibold text-white">Arquitetura de 'Fábrica': Produtividade Disruptiva</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Transformamos o ciclo de vida do desenvolvimento de software em um processo de fabricação inteligente, criando soluções de IA com velocidades e custos que redefinem os benchmarks de mercado.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://i5dvyyer3ittq48j.public.blob.vercel-storage.com/13-ZNOv8fGzWwKEB4O5v2HtRNn4pruf91.webp"
              alt="Mãos robóticas representando a visão AIOS"
              className="w-full rounded-lg shadow-xl ring-1 ring-purple-accent/20"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AIOSVision;