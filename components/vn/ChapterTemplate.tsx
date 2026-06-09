"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CinematicImage from "@/components/vn/CinematicImage";
import ChapterEnding from "@/components/vn/ChapterEnding";
import TypewriterText from "@/components/vn/TypewriterText";

export type Line = {
  speaker?: string;
  text: string;
};

interface ChapterTemplateProps {
  chapterNumber: string;
  title: string;
  subtitle: string;
  image: string;
  script: Line[];
  endingMessage: string;
  nextUrl: string;       
  prevUrl?: string;      
  isLast?: boolean;      // A interrogação torna opcional
}

export default function ChapterTemplate({
  chapterNumber,
  title,
  subtitle,
  image,
  script,
  endingMessage,
  nextUrl,
  prevUrl,
  isLast = false, // Valor padrão caso não seja enviado
}: ChapterTemplateProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [storyFinished, setStoryFinished] = useState(false);

  const hasScript = script && script.length > 0;
  const currentLine = hasScript ? script[currentLineIndex] : null;

  const advanceStory = () => {
    if (!hasScript || storyFinished) return;

    if (currentLineIndex < script.length - 1) {
      setCurrentLineIndex((prev) => prev + 1);
    } else {
      setStoryFinished(true);
    }
  };

  return (
    <main 
      onClick={advanceStory}
      style={{ paddingTop: "130px" }}
      className={`min-h-screen px-6 md:px-20 pb-32 text-[#f5ebe0] bg-[#0f0f0f] relative overflow-hidden select-none ${
        !storyFinished ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="absolute w-[500px] h-[500px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-100px] left-[-100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="pointer-events-none">
          <p className="uppercase tracking-[0.4em] text-sm text-[#bba892]">
            Capítulo {chapterNumber}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mt-2 text-[#f5ebe0]">
            {title}
          </h1>
          <p className="mt-3 text-[#c9b8a6] text-base md:text-lg italic">
            {subtitle}
          </p>
        </div>

        {image && (
          <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border border-white/5 pointer-events-none max-w-2xl mx-auto w-full relative">
            <CinematicImage src={image} />
          </div>
        )}

        <AnimatePresence mode="wait">
          {!storyFinished && currentLine && (
            <motion.div
              key={currentLineIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full mt-8 bg-black/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl z-40 pointer-events-none"
            >
              {currentLine.speaker && (
                <p className="text-sm text-[#d4c1a7] mb-3 uppercase tracking-widest font-semibold">
                  {currentLine.speaker}
                </p>
              )}
              <p className="text-lg md:text-xl text-[#f5ebe0] leading-relaxed min-h-[3rem]">
                <TypewriterText text={currentLine.text} />
              </p>
              <div className="text-xs opacity-40 mt-6 flex justify-between items-center">
                <span>{currentLineIndex + 1} / {script.length}</span>
                <span className="animate-pulse">Clique na tela para continuar →</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {storyFinished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center mt-12 w-full"
            >
              <ChapterEnding message={endingMessage} />
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-12 mt-8">
                {prevUrl && (
                  <Link href={prevUrl} className="text-sm uppercase tracking-[0.2em] text-[#9f8d7a] hover:text-white transition duration-300">
                    ← Voltar Capítulo
                  </Link>
                )}
                {isLast ? (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={nextUrl}
                      onClick={() => localStorage.setItem("storyCompleted", "true")}
                      className="bg-[#8c6a5d] text-white font-serif px-10 py-4 rounded-full shadow-lg hover:bg-[#f5ebe0] hover:text-black transition-all duration-500 text-lg flex items-center gap-2"
                    >
                      Abrir a Carta Selada ✉️
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Link href={nextUrl} className="bg-[#171717] border border-[#d4c1a7] text-[#f5ebe0] px-10 py-4 rounded-full hover:bg-[#f5ebe0] hover:text-black transition-all duration-500 text-sm uppercase tracking-[0.2em] font-medium block text-center">
                      Virar a Página ✨
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}