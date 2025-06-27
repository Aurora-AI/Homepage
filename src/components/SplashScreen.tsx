// src/components/SplashScreen.tsx

import React, { useState } from 'react';

// Definimos as propriedades que o componente vai receber,
// neste caso, uma função a ser chamada quando a animação terminar.
type SplashScreenProps = {
  onVideoEnd: () => void;
};

const SplashScreen = ({ onVideoEnd }: SplashScreenProps) => {
  // Novo estado para controlar a animação de fade-out
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Esta função será chamada quando o vídeo terminar de tocar
  const handleVideoEnd = () => {
    setIsFadingOut(true); // Inicia a animação de fade-out
    
    // Espera a animação de 1 segundo terminar antes de notificar o componente pai
    // para trocar de página.
    setTimeout(onVideoEnd, 1000); 
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-full bg-black z-50 transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // Chama nossa função quando o vídeo acaba
        className="w-full h-full object-cover"
      >
        <source src="/Video_script_8_202506251739.mp4" type="video/mp4" />
        Seu navegador não suporta o vídeo de abertura.
      </video>
      
      {/* A div do overlay/blur foi completamente REMOVIDA daqui. */}
      
    </div>
  );
};

export default SplashScreen;