import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-8 bg-darker-blue border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Aurora. Construindo o próximo paradigma de software.
        </p>
      </div>
    </footer>
  );
};

export default Footer;