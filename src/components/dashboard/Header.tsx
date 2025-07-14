// Caminho: src/components/dashboard/Header.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pb-6 border-b border-gray-200/80"
      // Animação de entrada suave para o cabeçalho
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Título e Subtítulo */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary tracking-tight">Dashboard</h1>
        <p className="text-text-secondary mt-1">Bem-vindo ao seu painel de controle Aurora.</p>
      </div>

      {/* Barra de Busca Interativa com animação no hover */}
      <motion.div 
        className="relative flex items-center mt-4 md:mt-0"
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
      >
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">
          {/* Ícone de busca em SVG para um visual mais limpo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Buscar modelos, dados..."
          className="w-full md:w-72 pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-blue-darker transition-shadow shadow-sm"
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;