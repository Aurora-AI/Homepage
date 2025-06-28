import React from 'react';

const HybridArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Arquitetura Híbrida</h2>
          <p className="text-base sm:text-lg text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex justify-center">
          {/* Placeholder Image for Context of Action */}
          <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-400 text-xl rounded-lg">
            [Imagem: LLMs na nuvem e SLMs on-device]
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridArchitectureSection;
