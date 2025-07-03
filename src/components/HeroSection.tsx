import React from 'react';
import { motion, type Variants } from 'framer-motion';

const HeroSection: React.FC = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: "easeOut", delay: 1 } 
    },
  };

  return (
    // AQUI ESTÁ A CORREÇÃO: O 'style' foi removido e o bg-[url(...)] foi adicionado ao className.
    <div
      className="h-screen w-full bg-contain bg-center bg-no-repeat flex items-center justify-end pr-[10%] bg-[url('/images/Puzzel_Aurora.png')]"
    >
      <motion.h1
        className="text-4xl lg:text-5xl font-serif text-white"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        E se a sua empresa pudesse sentir?
      </motion.h1>
    </div>
  );
};

export default HeroSection;