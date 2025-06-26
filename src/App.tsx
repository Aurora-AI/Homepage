// src/App.tsx
import React, { useState } from 'react';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home'; // Import Home component

export default function App() {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoEnd = () => {
    console.log('Video ended, setting showVideo to false');
    setShowVideo(false);
  };

  return (
    <>
      {showVideo ? (
        <VideoBackground onVideoEnd={handleVideoEnd} />
      ) : (
        <Home /> // Render Home component after video
      )}
    </>
  );
}
