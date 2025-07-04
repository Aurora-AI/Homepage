// src/components/VantagemCompetitiva.tsx
import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const VantagemCompetitiva = () => {
  return (
    <section id="vantagem-competitiva">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left md:order-last">
            <Heading as="h2">Nossa Vantagem Competitiva Assimétrica</Heading>
            <p className="mt-4 text-aurora-text-secondary text-lg">A Aurora não é apenas construída com IA; ela é construída por IA. Nossa metodologia nos permite entregar soluções com velocidade e custos que redefinem os benchmarks de mercado.</p>
            <div className="mt-6 border-t border-aurora-border pt-6">
              <h4 className="font-bold text-white">A Inteligência em Ação: O Aurora Negotiation GPS</h4>
              <p className="mt-2 text-aurora-text-secondary text-base">Nossa primeira "Ferramenta" é um sistema proativo que lê e compreende e-mails e transcrições para identificar Pontos de Dor e Objeções, sugerindo a "Próxima Melhor Ação".</p>
            </div>
          </div>
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/16.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Card>
    </section>
  );
};
export default VantagemCompetitiva;