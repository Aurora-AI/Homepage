import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Arquitetura Híbrida',
      description: 'Integração perfeita entre nuvem e infraestrutura local para máxima flexibilidade e segurança.',
    },
    {
      title: 'Fábrica de IA',
      description: 'Desenvolvimento e implantação acelerados de modelos de inteligência artificial personalizados.',
    },
    {
      title: 'Memória Ativa',
      description: 'Sistemas que aprendem continuamente e adaptam seu comportamento com base em novas informações.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Nossos Pilares Arquiteturais</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
