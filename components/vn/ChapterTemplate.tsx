"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CinematicImage from "@/components/vn/CinematicImage";
import ChapterEnding from "@/components/vn/ChapterEnding";
import TypewriterText from "@/components/vn/TypewriterText";

// ... outras partes do código ...

export default function ChapterTemplate({
  // ... props ...
}) {
  // ... lógica de estado ...

  return (
    <main
      onClick={advanceStory}
      className={`min-h-[80vh] px-6 md:px-20 pb-32 text-[#f8ede8] relative overflow-hidden select-none ${
        !storyFinished ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="max-w-3xl mx-auto relative z-10 pt-20">
        {/* ... cabeçalho do capítulo ... */}

        {image && (
          <div className="mt-10 rounded-[28px] overflow-hidden border border-[#5c2b39] shadow-[0_0_60px_rgba(120,30,60,0.25)] max-w-2xl mx-auto relative">
            <CinematicImage src={image} />
          </div>
        )}

        <AnimatePresence mode="wait">
          {!storyFinished && currentLine && (
            <motion.div
              key={currentLineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // A MUDANÇA ESTÁ AQUI: Centralizado, largura controlada e padding melhor
              className="mt-10 max-w-xl mx-auto bg-[#2a1418]/75 backdrop-blur-xl border border-[#5b2d39] rounded-[30px] p-6 md:p-8 shadow-2xl min-h-[180px]"
            >
              {currentLine.speaker && (
                <p className="uppercase tracking-[0.3em] text-sm text-[#d4c1a7] mb-3 font-semibold">
                  {currentLine.speaker}
                </p>
              )}
              <div className="text-xl leading-relaxed text-[#f8ede8]">
                <TypewriterText text={currentLine.text} />
              </div>
              <div className="mt-8 flex justify-between text-xs text-[#a88f8f] uppercase tracking-[0.15em]">
                <span>{currentLineIndex + 1} / {script.length}</span>
                <span className="animate-pulse">Clique para continuar</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ... parte final da história ... */}
      </div>
    </main>
  );
}
