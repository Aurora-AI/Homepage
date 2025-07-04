// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-aurora-bg";

  const variants = {
    primary: "bg-aurora-accent-purple text-white hover:opacity-90 focus:ring-aurora-accent-purple",
    secondary: "bg-transparent text-aurora-text-secondary border border-aurora-text-secondary/50 hover:bg-aurora-card hover:border-aurora-text-secondary"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;