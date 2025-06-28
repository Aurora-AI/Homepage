import React from 'react';

interface AuroraLoaderProps {
  type: "constellation";
}

const AuroraLoader: React.FC<AuroraLoaderProps> = ({ type }) => {
  if (type === "constellation") {
    return (
      <div className="flex items-center justify-center w-full h-full bg-black">
        <div className="relative w-40 h-40">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-dot-pulse"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(147, 51, 234, 0.7)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default AuroraLoader;
