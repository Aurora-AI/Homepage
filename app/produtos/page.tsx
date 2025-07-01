import React from 'react';
import ProductsIntroSection from '@/components/ProductsIntroSection';
import ProductCardsSection from '@/components/ProductCardsSection';

const ProdutosPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProductsIntroSection />
        <ProductCardsSection />
      </main>
    </div>
  );
};

export default ProdutosPage;
