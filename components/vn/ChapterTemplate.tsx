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

export interface ChapterTemplateProps {
  chapterNumber: string;
  title: string;
  subtitle: string;
  image: string;
  script: Line[];
  endingMessage: string;
  nextUrl: string;
  prevUrl?: string;
  isLast?: boolean;
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
  isLast = false,
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
      className={`min-h-screen pt-[130px] px-6 md:px-20 pb-32 text-[#f8ede8] relative overflow-hidden select-none bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)] ${
        !storyFinished ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div>
          <p className="uppercase tracking-[0.45em] text-sm text-[#d4c1a7]">
            Capítulo {chapterNumber}
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mt-3 text-[#fff7f5]">
            {title}
          </h1>
          <p className="mt-4 text-[#cbb7ae] text-lg italic">{subtitle}</p>
        </div>

        {image && (
          <div className="mt-10 rounded-[28px] overflow-hidden border border-[#5c2b39] shadow-[0_0_60px_rgba(120,30,60,0.25)] max-w-2xl mx-auto relative">
            <CinematicImage src={image} />
          </div>
        )}

        <AnimatePresence mode="wait">
          {!storyFinished && currentLine && (
            <motion.div
              key={currentLineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              // flex flex-col garante a estrutura, flex-grow no div interno faz a caixa crescer/encolher dinamicamente
              className="mt-10 max-w-xl mx-auto bg-[#2a1418]/75 backdrop-blur-xl border border-[#5b2d39] rounded-[30px] p-8 shadow-2xl flex flex-col"
            >
              <div className="flex-grow">
                {currentLine.speaker && (
                  <p className="uppercase tracking-[0.3em] text-sm text-[#d4c1a7] mb-4 font-semibold">
                    {currentLine.speaker}
                  </p>
                )}
                <div className="text-xl leading-relaxed text-[#f8ede8]">
                  <TypewriterText text={currentLine.text} />
                </div>
              </div>

              {/* Este bloco agora se mantém na parte inferior da caixa de forma automática */}
              <div className="mt-8 flex justify-between text-xs text-[#a88f8f] uppercase tracking-[0.15em]">
                <span>{currentLineIndex + 1} / {script.length}</span>
                <span className="animate-pulse">Clique para continuar</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {storyFinished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center mt-14"
            >
              <ChapterEnding message={endingMessage} />
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
                {prevUrl && (
                  <Link href={prevUrl} className="uppercase tracking-[0.25em] text-[#b79b8d] hover:text-white transition">
                    ← Capítulo anterior
                  </Link>
                )}
                <Link
                  href={nextUrl}
                  onClick={() => isLast && localStorage.setItem("storyCompleted", "true")}
                  className="bg-gradient-to-r from-[#7b1f3d] to-[#a33d58] px-10 py-4 rounded-full text-white font-serif text-lg shadow-[0_0_30px_rgba(163,61,88,0.4)] hover:shadow-[0_0_45px_rgba(163,61,88,0.6)] transition-all duration-500"
                >
                  {isLast ? "Abrir a Carta ❤️" : "Virar a Página ✨"}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
