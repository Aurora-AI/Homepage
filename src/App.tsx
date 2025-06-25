// src/App.tsx
import React, { useState, useEffect } from 'react';
import Home from './pages/Home'; // Path seems to be 'src/pages/Home.tsx'
import SplashScreen from './components/SplashScreen'; // New path

// Duration for the splash screen (e.g., 5 seconds)
const SPLASH_DURATION = 5000; // 5 seconds

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <Home />;
}
