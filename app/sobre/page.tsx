import React from 'react';
import ManifestoSection from '@/components/ManifestoSection';
import CopilotSection from '@/components/CopilotSection';
import AIFactorySection from '@/components/AIFactorySection';

const SobrePage: React.FC = () => {
  return (
    <div className="bg-black">
      <main>
        <ManifestoSection />
        <CopilotSection />
        <AIFactorySection />
      </main>
    </div>
  );
};

export default SobrePage;
