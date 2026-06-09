"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/theme.mp3"
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-[#171717]/80 backdrop-blur-xl border border-[#2a2a2a] px-5 py-3 rounded-full text-[#f5ebe0] hover:scale-105 transition-all duration-300"
      >
        {playing ? "⏸ Música" : "▶ Música"}
      </button>
    </>
  );
}