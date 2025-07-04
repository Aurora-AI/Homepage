import React from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ as: Component = 'h2', children, className = '' }: HeadingProps) => {
  const baseClasses = 'text-2xl font-bold text-white sm:text-3xl';
  
  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;