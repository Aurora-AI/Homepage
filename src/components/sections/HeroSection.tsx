import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <img
        src="/assets/imagens/Puzzel_Aurora.png"
        alt="Aurora Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-4 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
          Inteligência que se Constrói.
        </h1>
        <p className="text-xl md:text-3xl text-white drop-shadow-lg mb-8">
          Orquestramos sistemas cognitivos que aprendem, adaptam e evoluem com o seu negócio.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
          Conheça a Plataforma
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
