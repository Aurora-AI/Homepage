import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Puzzel_Aurora.png')" }}
        aria-hidden="true"
      ></div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute top-1/3 left-0 z-10 w-full max-w-lg lg:max-w-2xl text-left pl-8 lg:pl-16 transform -translate-y-1/2"
      >
        <blockquote className="text-white text-3xl md:text-4xl lg:text-5xl font-bold italic">
          E se a sua empresa pudesse sentir
        </blockquote>
        <p className="mt-4 text-slate-300 text-lg lg:text-xl">Com a Aurora, desvende insights ocultos e antecipe o futuro, transformando dados em decisões estratégicas e proativas.</p>
      </motion.div>
    </section>
  );
};

export default Hero;