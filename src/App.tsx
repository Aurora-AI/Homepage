// src/App.tsx
import React, { useState, useEffect, Suspense } from 'react';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home'; // Import Home component
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
    console.log('Video ended, setting showVideo to false');
    setShowVideo(false);
  };

  if (!i18nInitialized) {
    // Você pode mostrar um loader global aqui se preferir
    // Este console.log é para depuração, não deve aparecer na produção final.
    console.log('Waiting for i18next to initialize...');
    // Renderiza um loader simples enquanto o i18n não está pronto.
    // Idealmente, este loader seria estilizado ou viria de um componente.
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Carregando...</div>;
  }

  // Suspense ainda pode ser útil se componentes filhos carregarem namespaces de forma preguiçosa
  // ou tiverem outras operações assíncronas relacionadas a i18n.
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Carregando conteúdo...</div>}>
      {showVideo ? (
        <VideoBackground onVideoEnd={handleVideoEnd} />
      ) : (
        <Home /> // Render Home component after video
      )}
    </Suspense>
  );
}
