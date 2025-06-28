'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroVideo from '@/components/HeroVideo';
import HeroEmblem from '@/components/HeroEmblem';
import AIFactorySection from '@/components/AIFactorySection';
import ProductsIntroSection from '@/components/ProductsIntroSection';
import ActiveMemorySection from '@/components/ActiveMemorySection';
import CopilotSection from '@/components/CopilotSection';
import HybridArchitectureSection from '@/components/HybridArchitectureSection';
import ManifestoSection from '@/components/ManifestoSection';
import ProductCardsSection from '@/components/ProductCardsSection';
import TechnologyIntroSection from '@/components/TechnologyIntroSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showEmblem, setShowEmblem] = useState(false);

  const handleVideoEnd = () => {
    setShowEmblem(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Tempo para exibir o emblema antes de desaparecer
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-black text-white">
      {showSplash && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${showEmblem ? 'opacity-0' : 'opacity-100'}`}>
            <HeroVideo onEnded={handleVideoEnd} />
          </div>
          {showEmblem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="z-10"
            >
              <HeroEmblem />
            </motion.div>
          )}
        </div>
      )}

      {!showSplash && (
        <>
          <Header />
          <main>
            {/* Hero Section - Placeholder for now, will be replaced by a proper Hero component */}
            <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/Topo.png)' }}>
              <div className="text-center z-10">
                <h1 className="text-6xl font-bold text-white drop-shadow-lg">Bem-vindo à Aurora</h1>
                <p className="text-xl text-gray-200 mt-4">Explore o futuro da inteligência artificial.</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
            </section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <ProductsIntroSection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <ProductCardsSection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <AIFactorySection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <ActiveMemorySection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <CopilotSection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <HybridArchitectureSection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <ManifestoSection />
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <TechnologyIntroSection />
            </motion.section>

            {/* Add other sections here as needed */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
