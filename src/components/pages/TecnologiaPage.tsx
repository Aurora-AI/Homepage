import React from 'react';

const TecnologiaPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Tecnologia Aurora: Resposta Sugerida para o Formulário</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">1. Entrada de Dados Automatizada</h2>
        <p className="mb-4">
          A Aurora utiliza algoritmos avançados de IA para automatizar a entrada de dados de diversas fontes, como documentos digitalizados, e-mails e formulários online. Isso elimina a necessidade de inserção manual, reduzindo erros e economizando tempo.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Processamento de Linguagem Natural (PLN):</strong> Extrai informações relevantes de textos não estruturados.</li>
          <li className="mb-2"><strong>Reconhecimento Óptico de Caracteres (OCR):</strong> Converte imagens de texto em dados editáveis e pesquisáveis.</li>
          <li className="mb-2"><strong>Integração de APIs:</strong> Conecta-se a sistemas externos para importar dados de forma contínua.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">2. Suporte Visual ao Usuário</h2>
        <p className="mb-4">
          A plataforma oferece interfaces intuitivas e visualizações de dados interativas para facilitar a compreensão e a interação do usuário com as informações. Dashboards personalizáveis e gráficos dinâmicos permitem uma análise rápida e eficiente.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Dashboards Personalizáveis:</strong> Permitem que os usuários configurem a exibição de dados de acordo com suas necessidades.</li>
          <li className="mb-2"><strong>Gráficos e Relatórios Dinâmicos:</strong> Apresentam insights de forma clara e concisa, facilitando a tomada de decisões.</li>
          <li className="mb-2"><strong>Alertas e Notificações:</strong> Informam os usuários sobre eventos importantes ou anomalias nos dados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">3. Análise de Dados e Geração de Insights</h2>
        <p className="mb-4">
          A Aurora emprega técnicas de aprendizado de máquina para analisar grandes volumes de dados, identificar padrões, prever tendências e gerar insights acionáveis. Isso capacita as empresas a otimizar suas operações e estratégias.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Análise Preditiva:</strong> Preveem resultados futuros com base em dados históricos.</li>
          <li className="mb-2"><strong>Detecção de Anomalias:</strong> Identificam comportamentos incomuns ou fraudulentos nos dados.</li>
          <li className="mb-2"><strong>Segmentação de Clientes:</strong> Agrupam clientes com base em características e comportamentos semelhantes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">4. Automação de Processos</h2>
        <p className="mb-4">
          A integração de IA e blockchain permite a automação de fluxos de trabalho complexos, desde a aprovação de documentos até a execução de contratos. Isso aumenta a eficiência, reduz custos e minimiza a intervenção manual.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Contratos Inteligentes:</strong> Automatizam a execução de acordos quando as condições predefinidas são atendidas.</li>
          <li className="mb-2"><strong>Robotic Process Automation (RPA):</strong> Automatizam tarefas repetitivas e baseadas em regras.</li>
          <li className="mb-2"><strong>Fluxos de Trabalho Personalizáveis:</strong> Permitem que as empresas configurem e automatizem seus próprios processos.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">5. Segurança e Transparência com Blockchain</h2>
        <p className="mb-4">
          A tecnologia blockchain subjacente à Aurora garante a segurança, a imutabilidade e a transparência de todos os dados e transações. Cada registro é criptografado e distribuído, tornando-o à prova de adulteração.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Registros Imutáveis:</strong> Uma vez que os dados são registrados na blockchain, eles não podem ser alterados ou excluídos.</li>
          <li className="mb-2"><strong>Criptografia de Ponta a Ponta:</strong> Protege os dados durante o trânsito e em repouso.</li>
          <li className="mb-2"><strong>Auditoria Completa:</strong> Todas as transações são rastreáveis e verificáveis, garantindo a conformidade e a responsabilidade.</li>
        </ul>
      </section>
    </div>
  );
};

export default TecnologiaPage;