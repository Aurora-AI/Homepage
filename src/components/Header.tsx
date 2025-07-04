// src/components/Header.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { name: "Tese", href: "#tese" },
    { name: "Arquitetura", href: "#arquitetura" },
    { name: "Mapeamento Global", href: "#aios-vision" },
    { name: "Tecnologia", href: "#tecnologia" },
    { name: "Vantagem Competitiva", href: "#vantagem-competitiva" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Produto", href: "#produto" },
    { name: "Soberania Cognitiva", href: "#soberania-cognitiva" },
    { name: "Roteiro", href: "#roteiro" },
    { name: "Status", href: "#status" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-white font-bold text-xl" href="/">
              Aurora
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a className="text-white transition hover:text-white/75" href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;