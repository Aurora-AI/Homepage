import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src="/assets/imagens/Puzzel_Aurora.png"
        alt="Aurora Hero Banner"
        className="w-full h-full object-cover"
      />
      {/* Adicione aqui qualquer conteúdo sobreposto ao banner, se necessário */}
    </div>
  );
};

export default HeroBanner;
