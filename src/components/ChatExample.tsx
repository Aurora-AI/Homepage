import React from 'react';
import { motion } from 'framer-motion';

const ChatExample: React.FC = () => {
  const chatVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.5 }
    })
  };

  return (
    <div className="bg-gradient-to-br from-purple-accent/20 to-cyan-accent/20 rounded-2xl p-6 md:p-8 border border-purple-accent/30">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
        Exemplo Prático: A Experiência em Tempo Real
      </h3>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        <motion.div 
          className="flex items-start gap-3"
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={chatVariants}
        >
          <div className="w-8 h-8 bg-purple-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">V</span>
          </div>
          <div className="bg-purple-accent/20 rounded-lg p-3 flex-1">
            <p className="text-white font-medium">Você (Português):</p>
            <p className="text-slate-300">"Preciso entender melhor os requisitos técnicos do projeto antes de prosseguir."</p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-3 flex-row-reverse"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={chatVariants}
        >
          <div className="w-8 h-8 bg-cyan-accent rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">C</span>
          </div>
          <div className="bg-cyan-accent/20 rounded-lg p-3 flex-1">
            <p className="text-white font-medium">Cliente (Japonês → Português):</p>
            <p className="text-slate-300">"Claro! Os requisitos incluem integração com nosso sistema legado e suporte para 10.000 usuários simultâneos."</p>
          </div>
        </motion.div>

        <motion.div 
          className="text-center py-4"
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={chatVariants}
        >
          <p className="text-cyan-accent font-medium">
            ✨ Tradução instantânea • Contexto preservado • Zero barreiras
          </p>
        </motion.div>
      </div>

      <p className="text-slate-300 text-center mt-6 max-w-xl mx-auto">
        Imagine sua equipe de vendas em um chat com um cliente internacional. Você escreve em português; seu cliente no Japão lê em japonês. Instantaneamente. Nossa tecnologia garante que até as mais complexas nuances culturais sejam traduzidas com perfeição.
      </p>
    </div>
  );
};

export default ChatExample;