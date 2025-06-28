import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link, imageSrc }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
      {imageSrc && (
        <Image src={imageSrc} alt={title} width={128} height={128} className="object-contain mb-4" />
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={link}>
        <button className="px-4 py-2 rounded-lg font-semibold text-white
          bg-gradient-to-r from-purple-600 to-blue-500
          hover:from-purple-700 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50
          active:scale-95 active:shadow-none transition-all duration-300">
          Saiba Mais
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
