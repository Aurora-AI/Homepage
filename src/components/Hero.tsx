// src/components/Hero.tsx (com tipografia responsiva)
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-end">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left p-8"
      >
        <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold italic">
          E se a sua empresa pudesse sentir
        </blockquote>
      </motion.div>
    </section>
  );
};

export default Hero;