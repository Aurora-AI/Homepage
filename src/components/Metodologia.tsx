// src/components/Metodologia.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Metodologia = () => {
  return (
    <motion.section 
      id="metodologia" 
      className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
      // ... (props de animação) ...
    >
      <div className="mx-auto max-w-screen-md px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Como Construímos: Nossa Vantagem Competitiva Assimétrica.
          </h2>
          <p className="mt-4 text-slate-300 text-lg">
            A Aurora não é apenas construída com IA; ela é construída por IA...
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Metodologia;