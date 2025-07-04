// src/components/SocialProof.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  // Placeholder para os logos que você vai me informar
  const logos = [
    { name: 'Placeholder 1', src: 'https://via.placeholder.com/150x50?text=Logo' },
    { name: 'Placeholder 2', src: 'https://via.placeholder.com/150x50?text=Logo' },
    { name: 'Placeholder 3', src: 'https://via.placeholder.com/150x50?text=Logo' },
    { name: 'Placeholder 4', src: 'https://via.placeholder.com/150x50?text=Logo' },
  ];

  return (
    <motion.section 
      id="social-proof" 
      className="w-full py-24 sm:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Tecnologia e confiança para as equipes mais inovadoras do mundo
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none">
          {logos.map((logo) => (
            <img
              key={logo.name}
              className="col-span-1 max-h-12 w-full object-contain"
              src={logo.src}
              alt={logo.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;