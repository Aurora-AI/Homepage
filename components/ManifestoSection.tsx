import React from 'react';

const ManifestoSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url(/images/Puzzel_Aurora.png)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse px-4">
          Nossa Crença: A Tecnologia a Serviço do Potencial Humano.
        </h1>
      </div>
    </section>
  );
};

export default ManifestoSection;
