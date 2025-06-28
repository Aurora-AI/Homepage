import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManifestoSection from '@/components/ManifestoSection';
import CopilotSection from '@/components/CopilotSection';
import AIFactorySection from '@/components/AIFactorySection';

const SobrePage: React.FC = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <ManifestoSection />
        <CopilotSection />
        <AIFactorySection />
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;
