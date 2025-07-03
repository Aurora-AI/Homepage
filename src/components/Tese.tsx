// src/components/Tese.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Tese = () => {
  return (
    <motion.section 
      id="tese" 
      className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            O Paradigma "Intelligence-First"
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            O software tradicional reage. A Aurora antecipa. Nossa filosofia inverte o roteiro do desenvolvimento...
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Tese;