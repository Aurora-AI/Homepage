// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const linkSections = [
    {
      title: 'Produto',
      links: [{ name: 'Tese', href: '#tese' }, { name: 'Arquitetura', href: '#arquitetura' }, { name: 'Metodologia', href: '#metodologia' }],
    },
    {
      title: 'Empresa',
      links: [{ name: 'Sobre Nós', href: '#' }, { name: 'Carreiras', href: '#' }, { name: 'Contato', href: '#' }],
    },
    {
      title: 'Recursos',
      links: [{ name: 'Documentação', href: '#' }, { name: 'API Status', href: '#' }],
    },
  ];

  return (
    <footer className="bg-aurora-card border-t border-aurora-border">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <a className="block text-white font-bold text-2xl" href="/">
              Aurora
            </a>
            <p className="mt-4 max-w-xs text-aurora-text-secondary">
              Construindo o próximo paradigma de software com inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            {linkSections.map((section) => (
              <div key={section.title} className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">{section.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-aurora-text-secondary transition hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-aurora-border pt-8">
          <p className="text-center text-xs leading-relaxed text-aurora-text-secondary">
            © Aurora Project 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;