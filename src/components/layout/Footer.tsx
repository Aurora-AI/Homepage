import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-8 text-center text-slate-400">
      <p>&copy; {new Date().getFullYear()} Aurora. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;