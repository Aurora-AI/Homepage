import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <img
        src="/Aurora.png"
        alt="Aurora AI Interface"
        className="absolute inset-0 object-cover w-full h-full opacity-70 z-0"
      />
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-32 backdrop-blur-md bg-black/40 rounded-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl mb-6">
          Sua empresa. Mais inteligente. Mais sensível.
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
          Aurora atua como uma IA parceira, sentindo padrões e antecipando necessidades para que você decida com confiança.
        </p>
      </div>
    </section>
  );
}
