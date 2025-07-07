import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md p-4 flex justify-between items-center text-white z-50">
      <div className="text-2xl font-bold text-cyan-400">Aurora</div>
      <nav>
        <a href="#features" className="mx-2 hover:text-cyan-300 transition-colors">Funcionalidades</a>
        <a href="#architecture" className="mx-2 hover:text-cyan-300 transition-colors">Arquitetura</a>
        <a href="#contact" className="mx-2 hover:text-cyan-300 transition-colors">Contato</a>
      </nav>
    </header>
  );
};

export default Header;