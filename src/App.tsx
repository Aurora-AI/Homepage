// src/App.tsx
import React, { useState, Suspense } from 'react';
import VideoBackground from './components/VideoBackground';
import Home from './pages/_Home'; // Import Home component
import './i18n'; // Import i18n to ensure it's initialized

export default function App() {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    console.log('App.tsx: Video ended, setting showVideo to false');
    setShowVideo(false);
  };

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
