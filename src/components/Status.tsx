// src/components/Status.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Status = () => {
  return (
    <motion.section 
      id="status" 
      className="bg-transparent" // Sem fundo, apenas texto flutuando
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Versão de Lançamento (MVP)
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            Este site representa a fundação da nossa visão. Uma experiência interativa completa, construída e aprimorada pela nossa própria Fábrica de IA, está em desenvolvimento contínuo.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Status;