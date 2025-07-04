// src/components/ui/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      className={`bg-aurora-card border border-aurora-border rounded-lg shadow-lg p-8 transition-transform duration-300 ease-in-out hover:scale-[1.02] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;