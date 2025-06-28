import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Aurora. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
