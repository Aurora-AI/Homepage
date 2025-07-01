"use client";

"use client";

import { useEffect, useState } from 'react';

const HeroAnimation = () => {
  const [text, setText] = useState('');
  const fullText = 'E se a sua empresa pudesse sentir?';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/images/Puzzel_Aurora.png')]">
      <h1 className="text-5xl font-serif text-aurora-accent animate-fade-in">
        {text}
      </h1>
    </div>
  );
};

export default HeroAnimation;
