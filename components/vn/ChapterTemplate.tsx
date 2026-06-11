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
      style={{ paddingTop: "130px" }}
      className={`min-h-screen px-6 md:px-20 pb-32 text-[#f8ede8] relative overflow-hidden select-none bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)] ${
        !storyFinished ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Fundo */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#f5ebe0 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="absolute w-[650px] h-[650px] bg-[#6b1834]/20 blur-[130px] rounded-full -top-40 -left-40 animate-pulse" />

        <div className="absolute w-[500px] h-[500px] bg-[#c98c8c]/10 blur-[120px] rounded-full bottom-0 right-0 animate-pulse delay-1000" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4c1a7]/5 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        <div>

          <p className="uppercase tracking-[0.45em] text-sm text-[#d4c1a7]">
            Capítulo {chapterNumber}
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-3 text-[#fff7f5]">
            {title}
          </h1>

          <p className="mt-4 text-[#cbb7ae] text-lg italic">
            {subtitle}
          </p>

        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 rounded-[28px] overflow-hidden border border-[#5c2b39] shadow-[0_0_60px_rgba(120,30,60,0.25)] max-w-2xl mx-auto relative"
          >
            <CinematicImage src={image} />
          </motion.div>
        )}

        <AnimatePresence mode="wait">

          {!storyFinished && currentLine && (

            <motion.div
              key={currentLineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-[#2a1418]/75 backdrop-blur-xl border border-[#5b2d39] rounded-[30px] p-7 md:p-9 shadow-2xl"
            >

              {currentLine.speaker && (
                <p className="uppercase tracking-[0.3em] text-sm text-[#d4c1a7] mb-4 font-semibold">
                  {currentLine.speaker}
                </p>
              )}

              <p className="text-xl leading-relaxed text-[#f8ede8] min-h-[80px]">
                <TypewriterText text={currentLine.text} />
              </p>

              <div className="mt-8 flex justify-between text-xs text-[#a88f8f] uppercase tracking-[0.15em]">

                <span>
                  {currentLineIndex + 1} / {script.length}
                </span>

                <span className="animate-pulse">
                  Clique para continuar
                </span>

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

                  <Link
                    href={prevUrl}
                    className="uppercase tracking-[0.25em] text-[#b79b8d] hover:text-white transition"
                  >
                    ← Capítulo anterior
                  </Link>

                )}

                {isLast ? (

                  <motion.div whileHover={{ scale: 1.05 }}>

                    <Link
                      href={nextUrl}
                      onClick={() =>
                        localStorage.setItem("storyCompleted", "true")
                      }
                      className="bg-gradient-to-r from-[#7b1f3d] to-[#a33d58] px-10 py-4 rounded-full text-white font-serif text-lg shadow-[0_0_30px_rgba(163,61,88,0.4)] hover:shadow-[0_0_45px_rgba(163,61,88,0.6)] transition-all duration-500"
                    >
                      Abrir a Carta ❤️
                    </Link>

                  </motion.div>

                ) : (

                  <motion.div whileHover={{ scale: 1.03 }}>

                    <Link
                      href={nextUrl}
                      className="border border-[#d4c1a7] bg-[#2a1418]/70 text-[#f8ede8] px-10 py-4 rounded-full hover:bg-[#d4c1a7] hover:text-[#2a1418] transition-all duration-500 uppercase tracking-[0.2em]"
                    >
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
