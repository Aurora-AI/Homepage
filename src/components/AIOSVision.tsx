// Caminho do arquivo: src/components/AIOSVision.tsx (ou AiosSection.tsx)

import React from 'react';
import { motion } from 'framer-motion';
import ChatExample from './ChatExample';

const AIOSVision: React.FC = () => {
  return (
    <section id="aios" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de Fundo */}
      <video
        src="https://storage.googleapis.com/aurora-homepage-assets-prod1/Chat.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay Escuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

      {/* Container de Conteúdo com Animação */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: 1 }} // Atraso de 1s para o texto aparecer
        className="relative z-20 container mx-auto px-4 md:px-6 text-center max-w-5xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
          O Futuro dos Sistemas Operacionais: A Arquitetura Cognitiva da Aurora
        </h2>
        
        <div className="text-lg md:text-xl text-slate-200 space-y-4 max-w-4xl mx-auto">
          <p>
            O paradigma da inteligência artificial está evoluindo. Aplicações que simplesmente consomem APIs de modelos de linguagem representam o passado. O futuro pertence a ecossistemas inteligentes, a verdadeiros Sistemas Operacionais de IA (AIOS) que orquestram múltiplos "cérebros" — grandes e pequenos, na nuvem e no seu dispositivo.
          </p>
          <p>
            A Aurora não é apenas mais uma ferramenta nesse novo mundo; ela é a fábrica projetada para construir, gerenciar e otimizar os agentes que habitarão este futuro. Nossa arquitetura foi concebida desde o primeiro dia para ser um "Cérebro do Mundo": uma plataforma de cognição distribuída que aprende, raciocina e age com uma eficiência sem precedentes.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold pt-8 pb-4 text-cyan-200">
            Delegação por Incompletude Semântica: A Revolução da Eficiência
          </h3>
          <p>
            O pilar da nossa eficiência e o segredo da nossa arquitetura é um conceito que chamamos de Delegação por Incompletude Semântica. Em vez da abordagem tradicional e dispendiosa de enviar tarefas inteiras para um LLM massivo na nuvem, nosso AIOS opera com uma inteligência hierárquica. Um modelo de linguagem pequeno (SLM) e ultrarrápido, como o Phi-3 Mini da Microsoft ou o Gemma do Google, roda diretamente no seu dispositivo. Ele lida com 95% do trabalho.
          </p>
          <p>
            Quando este agente local encontra algo que não entende — uma "incompletude semântica" — ele não delega o problema inteiro. Ele faz uma micro-pergunta cirúrgica ao nosso "cérebro central" na nuvem, o Gemini 1.5 Pro. Veja um exemplo prático deste fluxo em ação:
          </p>
        </div>

        <ChatExample />

        <div className="mt-8 text-lg md:text-xl text-slate-200 space-y-4 max-w-4xl mx-auto">
          <p>
            Este método não é apenas teórico. Ele é o núcleo operacional da Aurora e resulta em benefícios massivos:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
            <li>
              <strong className="text-cyan-400">Redução de Custos:</strong> Trocamos milhões de tokens pagos por processamento local gratuito, reduzindo os custos de API em mais de 90%.
            </li>
            <li>
              <strong className="text-cyan-400">Velocidade e Experiência Offline:</strong> As respostas são quase instantâneas para a maioria das tarefas, e a funcionalidade crítica permanece disponível mesmo sem conexão com a internet.
            </li>
            <li>
              <strong className="text-cyan-400">Privacidade e Segurança:</strong> Dados sensíveis são processados localmente no seu dispositivo, nunca deixando seu ambiente seguro.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AIOSVision;