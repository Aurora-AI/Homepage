import React from 'react';
import Link from 'next/link';

interface AuroraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
}

const AuroraButton: React.FC<AuroraButtonProps> = ({ text, link, className, ...props }) => {
  const buttonClasses = `px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300
    bg-gradient-to-r from-purple-600 to-blue-500
    hover:from-purple-700 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50
    active:scale-95 active:shadow-none
    ${className || ''}
  `;

  if (link) {
    return (
      <Link href={link} className={buttonClasses} {...props}>
        {text}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {text}
    </button>
  );
};

export default AuroraButton;
