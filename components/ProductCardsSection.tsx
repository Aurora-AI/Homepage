import React from 'react';
import ProductCard from './ProductCard';

const ProductCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <ProductCard
          title="Aurora CRM"
          description="Um CRM inteligente que utiliza IA para otimizar o relacionamento com o cliente, prever necessidades e automatizar interações."
          link="/produtos/crm"
          imageSrc="/images/placeholder-crm.png" // Placeholder para imagem do CRM
        />
        <ProductCard
          title="Aurora Board"
          description="Uma plataforma de gestão de projetos e tarefas com recursos de IA para aumentar a produtividade e a colaboração da equipe."
          link="/produtos/board"
          imageSrc="/images/placeholder-board.png" // Placeholder para imagem do Board
        />
      </div>
    </section>
  );
};

export default ProductCardsSection;
