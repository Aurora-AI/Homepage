// Caminho do arquivo: src/components/layout/Header.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg p-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">Aurora</div>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#tese" className="hover:text-cyan-300 transition-colors">Tese</a>
          <a href="#arquitetura" className="hover:text-cyan-300 transition-colors">Arquitetura</a>
          <a href="#tecnologia" className="hover:text-cyan-300 transition-colors">Tecnologia</a>
          <a href="#aios" className="hover:text-cyan-300 transition-colors">Visão AIOS</a>
          <a href="#cerebro-mundo" className="hover:text-cyan-300 transition-colors">Cérebro do Mundo</a>
          <a href="#soberania" className="hover:text-cyan-300 transition-colors">Soberania</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;