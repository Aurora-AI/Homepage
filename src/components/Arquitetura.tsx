import React from 'react';
import Card from './ui/Card';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const Arquitetura = () => {
  return (
    <section id="arquitetura">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Heading as="h2">O Cérebro Híbrido: Orquestrando a Inteligência</Heading>
            <p className="mt-4 text-slate-300 text-lg">Velocidade e Privacidade no Dispositivo. Utilizamos SLMs de ponta (Gemma, Phi-3) para executar tarefas instantaneamente, mesmo offline. Para análises profundas, nosso AuroraRouter aciona LLMs de classe mundial como Gemini, garantindo máxima capacidade para os desafios mais complexos.</p>
          </div>
          <motion.div 
            className="w-full h-80 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/15.webp')" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </Card>
    </section>
  );
};
export default Arquitetura;