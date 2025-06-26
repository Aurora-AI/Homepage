import React from "react";

interface VideoBackgroundProps {
  onVideoEnd: () => void;
}

export default function VideoBackground({ onVideoEnd }: VideoBackgroundProps) {
  const handleVideoEnd = () => {
    onVideoEnd();
  };

  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      <video
        src="/Video_script_8_202506251739.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onEnded={handleVideoEnd} // Call onVideoEnd when video finishes
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
    </section>
  );
}
