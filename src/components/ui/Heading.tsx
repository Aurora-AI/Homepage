// src/components/ui/Heading.tsx
import React from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ as: Component = 'h2', children, className = '' }: HeadingProps) => {
  const sizeClasses = {
    h1: 'text-4xl md:text-5xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
  };

  const baseStyles = "text-aurora-text-primary";
  const componentClasses = `${baseStyles} ${sizeClasses[Component]} ${className}`;

  return (
    <Component className={componentClasses}>
      {children}
    </Component>
  );
};

export default Heading;