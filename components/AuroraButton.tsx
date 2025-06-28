import React from 'react';

interface AuroraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AuroraButton: React.FC<AuroraButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300
        bg-gradient-to-r from-purple-600 to-blue-500
        hover:from-purple-700 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50
        active:scale-95 active:shadow-none
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default AuroraButton;
