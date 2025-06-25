// src/components/SplashScreen.tsx
import React from 'react';

const SplashScreen = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h1>Splash Screen Video Playing...</h1>
      {/* In a real scenario, this would contain a video player */}
    </div>
  );
};

export default SplashScreen;
