import React from 'react';

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
    <div className="mt-8 p-4 md:p-6 bg-gray-900/50 rounded-lg text-left max-w-3xl mx-auto font-mono text-sm md:text-base border border-cyan-500/20 space-y-4">
      <div className="flex items-start gap-4">
        <div className="h-6 w-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
        <p className="flex-1">
          <strong className="text-cyan-300">Usuário:</strong> "Analise este e-mail do CEO da InnovateCorp e prepare um rascunho de resposta abordando a objeção sobre o 'custo de implementação'. Sugira uma reunião para a próxima terça-feira."
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-6 w-6 bg-purple-400 rounded-full flex-shrink-0 mt-1"></div>
        <p className="flex-1">
          <strong className="text-purple-300">Agente Local (Phi-3 Mini):</strong> "Entendido. Analisando... Eu compreendi 99% do pedido... No entanto, não tenho certeza sobre o tom ideal para responder a um CEO neste contexto. Vou consultar o especialista."
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-6 w-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
        <div className="flex-1">
          <p><strong className="text-yellow-300">Micro-prompt para a Nuvem (Comunicação interna do AIOS):</strong></p>
          <pre className="bg-black/50 p-3 rounded-md mt-2 whitespace-pre-wrap text-xs md:text-sm">
            <code>{jsonPrompt}</code>
          </pre>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="h-6 w-6 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
        <p className="flex-1">
          <strong className="text-yellow-300">Cérebro Central (Gemini 1.5 Pro):</strong> "Tom recomendado: Respeitoso, direto e focado em valor, não em preço. Sugira uma análise de ROI (Retorno sobre Investimento)."
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-6 w-6 bg-purple-400 rounded-full flex-shrink-0 mt-1"></div>
        <p className="flex-1">
          <strong className="text-purple-300">Agente Local (Finalizando):</strong> "Inteligência recebida. Gerando o rascunho da resposta com o tom recomendado..."
        </p>
      </div>
    </div>
  );
};

export default ChatExample;