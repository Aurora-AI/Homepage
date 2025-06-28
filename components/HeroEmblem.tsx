import React from 'react';
import Image from 'next/image';

const HeroEmblem: React.FC = () => {
  return (
    <Image
      src="/images/Puzzel_Aurora.png"
      alt="Emblema Heroico Aurora"
      layout="fill"
      objectFit="contain"
    />
  );
};

export default HeroEmblem;
