import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import type { ImageProps } from 'next/image';
import type { LinkProps } from 'next/link';

// Mock do componente next/image para evitar erros em testes
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

// Mock do componente next/link para evitar erros em testes
jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: LinkProps & { children: React.ReactNode }) => {
    return <a {...props}>{props.children}</a>;
  },
}));

describe('Header', () => {
  it('should render the Aurora logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Aurora Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/images/logo-aurora3.png');
  });

  it('should render desktop navigation links', () => {
    render(<Header />);
    const desktopNav = screen.getByRole('navigation', { name: /desktop-menu/i });
    expect(desktopNav).toBeInTheDocument();
    expect(screen.getByText('Home', { selector: 'nav[aria-label="desktop-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Sobre', { selector: 'nav[aria-label="desktop-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Tecnologia', { selector: 'nav[aria-label="desktop-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Produtos', { selector: 'nav[aria-label="desktop-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Contato', { selector: 'nav[aria-label="desktop-menu"] a' })).toBeInTheDocument();
  });

  it('should render mobile navigation links', () => {
    render(<Header />);
    const mobileNav = screen.getByRole('navigation', { name: /mobile-menu/i });
    expect(mobileNav).toBeInTheDocument();
    expect(screen.getByText('Home', { selector: 'nav[aria-label="mobile-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Sobre', { selector: 'nav[aria-label="mobile-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Tecnologia', { selector: 'nav[aria-label="mobile-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Produtos', { selector: 'nav[aria-label="mobile-menu"] a' })).toBeInTheDocument();
    expect(screen.getByText('Contato', { selector: 'nav[aria-label="mobile-menu"] a' })).toBeInTheDocument();
  });

  it('should toggle mobile menu visibility on hamburger button click', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Abrir menu');
    const mobileMenu = screen.getByRole('navigation', { name: /mobile-menu/i });

    // Menu deve estar inicialmente escondido
    expect(mobileMenu).toHaveClass('hidden');

    // Clicar no botão deve mostrar o menu
    fireEvent.click(menuButton);
    expect(mobileMenu).not.toHaveClass('hidden');

    // Clicar novamente deve esconder o menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass('hidden');
  });
});
