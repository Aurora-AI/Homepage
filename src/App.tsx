// src/App.tsx
import React, { useState, useEffect, Suspense } from 'react';
import VideoBackground from './components/VideoBackground';
import Home from './pages/_Home'; // Import Home component
import { initializeI18n } from './i18n';

// Chamar a inicialização do i18next. Isso retorna uma promessa.
const i18nPromise = initializeI18n();

export default function App() {
  const [showVideo, setShowVideo] = useState(true);
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    i18nPromise
      .then(() => {
        setI18nInitialized(true);
        console.log('i18next initialized successfully');
      })
      .catch(error => {
        console.error('i18next initialization failed:', error);
        // Mesmo em caso de falha, podemos querer mostrar a UI com o idioma de fallback
        // ou um estado de erro específico para i18n.
        // Por ora, vamos permitir que a UI renderize para não bloquear tudo.
        setI18nInitialized(true);
      });
  }, []);

  const handleVideoEnd = () => {
    console.log('App.tsx: Video ended, setting showVideo to false');
    setShowVideo(false);
  };

  if (!i18nInitialized) {
    console.log('App.tsx: Waiting for i18next to initialize...');
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Carregando...</div>;
  }

  console.log(`App.tsx: showVideo is ${showVideo ? 'true' : 'false'}`);

  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Carregando conteúdo...</div>}>
      {showVideo ? (
        <VideoBackground onVideoEnd={handleVideoEnd} />
      ) : (
        <Home />
      )}
    </Suspense>
  );
}
