import React from 'react';

const ProductsIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 animate-pulse-neon mb-4">
          Nossas Soluções: Inovação ao Seu Alcance
        </h1>
        <p className="text-xl text-gray-300">
          Descubra como a Aurora pode transformar sua experiência com inteligência artificial.
        </p>
      </div>
    </section>
  );
};

export default ProductsIntroSection;
