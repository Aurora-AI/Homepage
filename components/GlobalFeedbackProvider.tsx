'use client';

import React from 'react';
import { useGlobalStore } from '../store/globalStore';
import AuroraLoader from './AuroraLoader';

interface GlobalFeedbackProviderProps {
  children: React.ReactNode;
}

const GlobalFeedbackProvider: React.FC<GlobalFeedbackProviderProps> = ({ children }) => {
  const { isLoading, errorMessage } = useGlobalStore();

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AuroraLoader type="constellation" />
        </div>
      )}
      {errorMessage && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-4 text-center z-50">
          {errorMessage}
        </div>
      )}
      {children}
    </>
  );
};

export default GlobalFeedbackProvider;
