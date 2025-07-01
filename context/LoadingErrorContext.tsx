"use client"; // <--- Adicione esta linha aqui!

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingErrorContextType {
  isLoading: boolean;
  errorMessage: string | null;
  setLoading: (loading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
}

const LoadingErrorContext = createContext<LoadingErrorContextType | undefined>(undefined);

export const LoadingErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  

  return (
    <LoadingErrorContext.Provider value={{ isLoading, errorMessage, setLoading, setErrorMessage }}>
      {children}
    </LoadingErrorContext.Provider>
  );
};

export const useLoadingError = () => {
  const context = useContext(LoadingErrorContext);
  if (context === undefined) {
    throw new Error('useLoadingError must be used within a LoadingErrorProvider');
  }
  return context;
};
