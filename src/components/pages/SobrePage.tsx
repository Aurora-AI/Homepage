import React from 'react';

const SobrePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Versão Estratégica 'Aurora'</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">1. Visão Geral da Aurora</h2>
        <p className="mb-4">
          A Aurora é uma plataforma inovadora que integra inteligência artificial (IA) e blockchain para otimizar a gestão de dados e processos em diversos setores. Nosso objetivo é fornecer soluções seguras, transparentes e eficientes, capacitando empresas e indivíduos a tomar decisões mais informadas e a operar com maior agilidade.
        </p>
        <p>
          Combinamos o poder preditivo da IA com a imutabilidade e a segurança da blockchain para criar um ecossistema de dados confiável e automatizado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">2. Pilares Tecnológicos</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Inteligência Artificial (IA):</strong> Utiliza algoritmos avançados de aprendizado de máquina para análise preditiva, automação de tarefas e otimização de processos.
          </li>
          <li className="mb-2">
            <strong>Blockchain:</strong> Garante a segurança, a transparência e a imutabilidade dos dados, criando um registro descentralizado e à prova de fraudes.
          </li>
          <li className="mb-2">
            <strong>Contratos Inteligentes:</strong> Automatizam acordos e transações, eliminando a necessidade de intermediários e reduzindo custos operacionais.
          </li>
          <li className="mb-2">
            <strong>Big Data Analytics:</strong> Processa e interpreta grandes volumes de dados para extrair insights valiosos e apoiar a tomada de decisões estratégicas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">3. Casos de Uso e Aplicações</h2>
        <p className="mb-4">
          A Aurora é versátil e pode ser aplicada em diversas indústrias, incluindo:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Saúde:</strong> Gestão de registros médicos, pesquisa de medicamentos e telemedicina.
          </li>
          <li className="mb-2">
            <strong>Finanças:</strong> Prevenção de fraudes, análise de risco e automação de transações.
          </li>
          <li className="mb-2">
            <strong>Logística:</strong> Otimização de cadeias de suprimentos e rastreamento de produtos.
          </li>
          <li className="mb-2">
            <strong>Governo:</strong> Transparência em processos públicos e gestão de identidade digital.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">4. Vantagens Competitivas</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <strong>Segurança Aprimorada:</strong> A arquitetura blockchain protege os dados contra acessos não autorizados e manipulações.
          </li>
          <li className="mb-2">
            <strong>Eficiência Operacional:</strong> A automação impulsionada por IA e contratos inteligentes reduz a carga de trabalho manual e otimiza os fluxos de trabalho.
          </li>
          <li className="mb-2">
            <strong>Transparência Total:</strong> Todas as transações e interações são registradas de forma imutável na blockchain, garantindo auditoria completa.
          </li>
          <li className="mb-2">
            <strong>Escalabilidade:</strong> A plataforma é projetada para lidar com grandes volumes de dados e crescer conforme as necessidades do usuário.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">5. Roadmap Futuro</h2>
        <p className="mb-4">
          Estamos comprometidos com a evolução contínua da Aurora. Nossos próximos passos incluem:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Desenvolvimento de novos módulos de IA para análise de dados mais sofisticada.
          </li>
          <li className="mb-2">
            Expansão para novos mercados e setores.
          </li>
          <li className="mb-2">
            Fortalecimento da comunidade de desenvolvedores e parceiros.
          </li>
        </ul>
        <p>
          A Aurora representa o futuro da gestão de dados, combinando inovação tecnológica com um compromisso inabalável com a segurança e a eficiência.
        </p>
      </section>
    </div>
  );
};

export default SobrePage;
