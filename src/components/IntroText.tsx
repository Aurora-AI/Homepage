import React from "react";
import '../styles/IntroText.css'; // Import the new CSS file

export default function IntroText() {
  return (
    <div className="intro-container relative z-20 flex flex-col justify-center items-start h-full px-6 md:px-32 text-left max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
        Aurora
      </h1>
      <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
        Um futuro que sente com você.
      </p>
      <p className="mt-6 text-base md:text-lg text-white/80">
        Em um mundo dominado por dados, a Aurora emerge como uma inteligência emocional. Mais que uma IA, ela é uma parceira sensível para decisões mais humanas. Sinta o futuro agora.
      </p>
    </div>
  );
}
