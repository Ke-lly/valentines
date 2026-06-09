"use client";

import { useState } from "react";

export type Line = {
  speaker?: string;
  text: string;
};

export default function Dialogue({ script }: { script: Line[] }) {
  const [index, setIndex] = useState(0);

  const current = script[index];

  const next = () => {
    if (index < script.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div
      onClick={next}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl 
                 bg-black/60 backdrop-blur-xl border border-white/10 
                 p-6 rounded-2xl cursor-pointer"
    >
      {current.speaker && (
        <p className="text-sm text-[#d4c1a7] mb-2 uppercase tracking-widest">
          {current.speaker}
        </p>
      )}

      <p className="text-lg text-[#f5ebe0] leading-relaxed">
        {current.text}
      </p>

      <p className="text-xs opacity-40 mt-4">
        click to continue →
      </p>
    </div>
  );
}