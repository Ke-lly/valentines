"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
   <main className="min-h-screen text-[#f5ebe0] flex items-center justify-center px-6 overflow-hidden relative bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">
      {/* FUNDO: Estrelas + Glows + Onda */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Textura sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#f5ebe0 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Chuva de Estrelas */}
{[
  { x: "5vw", d: 4, delay: 0 },
  { x: "12vw", d: 5, delay: 0.5 },
  { x: "20vw", d: 6, delay: 1 },
  { x: "28vw", d: 4.5, delay: 1.5 },
  { x: "36vw", d: 5.5, delay: 2 },
  { x: "44vw", d: 4.8, delay: 0.8 },
  { x: "52vw", d: 5.2, delay: 1.2 },
  { x: "60vw", d: 6, delay: 2.5 },
  { x: "68vw", d: 4.5, delay: 0.3 },
  { x: "76vw", d: 5.5, delay: 1.8 },
  { x: "84vw", d: 4.2, delay: 2.2 },
  { x: "92vw", d: 5.8, delay: 0.7 },
].map((star, i) => (
  <motion.div
    key={i}
    className="absolute w-[2px] h-[2px] bg-white rounded-full"
    initial={{
      opacity: 0,
      x: star.x,
      y: -10,
    }}
    animate={{
      opacity: [0, 1, 0],
      y: "110vh",
    }}
    transition={{
      duration: star.d,
      repeat: Infinity,
      delay: star.delay,
      ease: "linear",
    }}
  />
))}

        {/* Glow Superior */}
        <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/20 blur-[100px] rounded-full -top-[100px] -left-[100px] animate-pulse" />

        {/* Glow Inferior */}
        <div className="absolute w-[500px] h-[500px] bg-[#d4c1a7]/15 blur-[100px] rounded-full -bottom-[100px] -right-[100px] animate-pulse delay-1000" />

        {/* Onda de luz */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4c1a7]/5 to-transparent skew-x-[-20deg]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* CONTEÚDO */}
      <section className="text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="uppercase tracking-[0.45em] text-sm text-[#d4c1a7]"
        >
          12 DE JUNHO • EDIÇÃO ESPECIAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 1.4,
            scale: {
              duration: 6,
              repeat: Infinity,
            },
          }}
          className="text-7xl md:text-8xl mt-6 font-serif"
        >
          Valentine's Day
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 uppercase tracking-[0.25em] text-xs text-[#bba88e]"
        >
          Uma coleção de memórias escritas a dois
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-8 text-lg max-w-2xl text-[#cfc2b4] leading-relaxed italic mx-auto"
        >
          “Toda história de amor é feita de pequenos capítulos.
          Alguns duram apenas um instante.
          Outros permanecem para sempre.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Link
            href="/archive"
            className="mt-10 inline-block border border-[#d4c1a7] px-8 py-3 rounded-full transition-all duration-500 hover:bg-[#d4c1a7] hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,193,167,0.35)]"
          >
            Abrir o Livro
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 2.2 }}
          className="mt-16 uppercase tracking-[0.3em] text-xs text-[#8c7b6b]"
        >
          Cada página guarda um momento especial
        </motion.p>

      </section>
    </main>
  );
}

