import React from 'react';

interface HeroVideoProps {
  onEnded: () => void;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ onEnded }) => {
  return (
    <video
      autoPlay
      muted
      playsInline
      onEnded={onEnded}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/Video_script_8_202506251739.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
