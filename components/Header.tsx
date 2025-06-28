"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  useEffect(() => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.toggle('hidden');
      });
    }
  }, []);

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

          {/* Lado Direito: Botão Hambúrguer (sempre visível) */}
          <div className="flex-1 flex justify-end">
            <button id="menu-button" className="text-white focus:outline-none hover:scale-110 transition-transform duration-200" aria-label="Abrir menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Dropdown (acionado pelo hambúrguer) */}
      <nav id="mobile-menu" className="hidden absolute top-20 left-0 right-0 bg-gray-800 bg-opacity-95 flex flex-col items-center space-y-4 py-4 z-10">
        <Link href="/" className="text-white hover:text-gray-300 focus:text-gray-300 transition-colors duration-200">Home</Link>
        <Link href="/sobre" className="text-white hover:text-gray-300 focus:text-gray-300 transition-colors duration-200">Sobre</Link>
        <Link href="/tecnologia" className="text-white hover:text-gray-300 focus:text-gray-300 transition-colors duration-200">Tecnologia</Link>
        <Link href="/produtos" className="text-white hover:text-gray-300 focus:text-gray-300 transition-colors duration-200">Produtos</Link>
        <Link href="/contato" className="text-white hover:text-gray-300 focus:text-gray-300 transition-colors duration-200">Contato</Link>
      </nav>
    </>
  );
};

export default Header;
