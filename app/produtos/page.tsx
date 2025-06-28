import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsIntroSection from '@/components/ProductsIntroSection';
import ProductCardsSection from '@/components/ProductCardsSection';

const ProdutosPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductsIntroSection />
        <ProductCardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProdutosPage;
