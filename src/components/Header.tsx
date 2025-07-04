// src/components/Header.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { name: "Tese", href: "#tese" },
    { name: "Tecnologia", href: "#arquitetura" },
    { name: "Vantagem Competitiva", href: "#metodologia" },
    { name: "Produto", href: "#produto" },
    { name: "Soberania Cognitiva", href: "#roteiro" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a className="block text-white font-bold text-xl" href="/">
              Aurora
            </a>
          </div>

          <div>
            {/* CORREÇÃO: Removido 'hidden' e 'md:block' para o menu ser sempre visível */}
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a className="text-slate-300 transition hover:text-white" href={item.href}>
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