// Caminho do arquivo: src/components/ChatExample.tsx

import React from 'react';

// Ícones SVG funcionais
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const AgentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.99A5.002 5.002 0 1012 5a5.002 5.002 0 00-4.99 5.002A5.5 5.5 0 003 15z" />
    </svg>
);

const ChatExample: React.FC = () => {
  const jsonPrompt = `{
 "task": "definir_tom_de_resposta",
 "contexto": {
   "remetente": "CEO",
   "empresa": "InnovateCorp",
   "assunto": "objeção de custo"
 }
}`;

  return (
    <div className="mt-8 p-4 md:p-6 bg-gray-800/50 rounded-lg text-left max-w-3xl mx-auto font-mono text-sm md:text-base">
      <div className="flex items-start gap-3 mb-4">
        <UserIcon />
        <p className="flex-1">
          <strong>Usuário:</strong> "Analise este e-mail do CEO da InnovateCorp e prepare um rascunho de resposta abordando a objeção sobre o 'custo de implementação'. Sugira uma reunião para a próxima terça-feira."
        </p>
      </div>
      <div className="flex items-start gap-3 mb-4">
        <AgentIcon />
        <p className="flex-1">
          <strong>Agente Local (Phi-3 Mini):</strong> "Entendido. Analisando... Eu compreendi 99% do pedido. No entanto, não tenho certeza sobre o tom ideal para responder a um CEO neste contexto. Vou consultar o especialista."
        </p>
      </div>
      <div className="flex items-start gap-3 mb-4">
        <CloudIcon />
        <div className="flex-1">
          <p><strong>Micro-prompt para a Nuvem:</strong></p>
          <pre className="bg-gray-900/70 p-3 rounded-md mt-2 whitespace-pre-wrap">
            <code>{jsonPrompt}</code>
          </pre>
        </div>
      </div>
      {/* ... O resto do componente continua igual ... */}
    </div>
  );
};

// ATUALIZAÇÃO: Usando export default
export default ChatExample;