// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-end px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white text-2xl lg:text-2xl font-semibold italic text-center md:text-left"
      >
        E se a sua empresa pudesse sentir
      </motion.h2>
    </div>
  );
};

export default Hero;