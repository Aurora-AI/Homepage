// src/components/Arquitetura.tsx
import React from 'react';
import Heading from './ui/Heading';
import { motion } from 'framer-motion';

const imageUrl = 'https://storage.googleapis.com/aurora-homepage-assets-prod1/Otimizadas%20Web/15.webp';

const Arquitetura = () => {
  return (
    <section id="arquitetura" className="w-full py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4 text-center lg:text-left">
            <Heading as="h2">O Cérebro Híbrido: Orquestrando a Inteligência</Heading>
            <p className="mt-6 text-lg leading-8 text-aurora-text-secondary">
              O equilíbrio perfeito entre custo, performance e segurança, impulsionando uma nova era de agilidade e inteligência para sua empresa.
            </p>
          </div>
          <motion.img
            src={imageUrl}
            alt="Visualização abstrata de um cadeado digital simbolizando segurança"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 md:w-[48rem]"
            width={2432}
            height={1442}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Arquitetura;