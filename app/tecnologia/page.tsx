import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologyIntroSection from '@/components/TechnologyIntroSection';
import HybridArchitectureSection from '@/components/HybridArchitectureSection';
import ActiveMemorySection from '@/components/ActiveMemorySection';

const TecnologiaPage: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <TechnologyIntroSection />
        <HybridArchitectureSection />
        <ActiveMemorySection />
      </main>
      <Footer />
    </div>
  );
};

export default TecnologiaPage;
