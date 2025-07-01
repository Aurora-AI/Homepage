import React from 'react';
import TechnologyIntroSection from '@/components/TechnologyIntroSection';
import HybridArchitectureSection from '@/components/HybridArchitectureSection';
import ActiveMemorySection from '@/components/ActiveMemorySection';

const TecnologiaPage: React.FC = () => {
  return (
    <div className="bg-black">
      <main>
        <TechnologyIntroSection />
        <HybridArchitectureSection />
        <ActiveMemorySection />
      </main>
    </div>
  );
};

export default TecnologiaPage;
