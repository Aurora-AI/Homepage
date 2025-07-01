"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="mx-auto flex items-center justify-between">
          {/* Lado Esquerdo: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/">
              <Image src="/images/logo-aurora3.png" alt="Aurora Logo" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Lado Direito: Navegação Desktop */}
          <nav className="hidden md:flex space-x-8" aria-label="desktop-menu">
            <Link href="/" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200">Solução</Link>
            <Link href="/credo" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200">Nosso Credo</Link>
            <Link href="/inovacao" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200">Inovação</Link>
          </nav>

          {/* Lado Direito: Botão Hambúrguer (visível apenas em telas pequenas) */}
          <div className="md:hidden flex-1 flex justify-end">
            <button
              id="menu-button"
              className="text-white focus:outline-none hover:scale-110 transition-transform duration-200"
              aria-label="Abrir menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Dropdown (visível apenas em telas pequenas quando aberto) */}
      <nav
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 right-0 bg-gray-800 bg-opacity-95 flex flex-col items-center space-y-4 py-4 z-10 ${isMobileMenuOpen ? '' : 'hidden'}`}
        aria-label="mobile-menu"
      >
        <Link href="/" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Solução</Link>
        <Link href="/credo" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Nosso Credo</Link>
        <Link href="/inovacao" className="text-white hover:text-aurora-accent focus:text-aurora-accent transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Inovação</Link>
      </nav>
    </>
  );
};

export default Header;
