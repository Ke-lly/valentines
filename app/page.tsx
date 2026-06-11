"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TypewriterText from "@/components/vn/TypewriterText";

export default function Home() {
  const [transition, setTransition] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setTransition(true);

    setTimeout(() => {
      router.push("/archive");
    }, 1800);
  };

  return (
    <main className="min-h-screen text-[#fff5f7] flex items-center justify-center px-6 overflow-hidden relative bg-[radial-gradient(circle_at_top,#6b1f3c_0%,#2d1020_35%,#12080f_70%,#050507_100%)]">

      {/* FUNDO */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#ffffff 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* 💖 CORAÇÕES CAINDO */}
        {[
          { x: "5vw", d: 6, delay: 0 },
          { x: "12vw", d: 7, delay: 0.5 },
          { x: "20vw", d: 6.5, delay: 1 },
          { x: "28vw", d: 7.2, delay: 1.5 },
          { x: "36vw", d: 6.8, delay: 2 },
          { x: "44vw", d: 7.5, delay: 0.8 },
          { x: "52vw", d: 6.3, delay: 1.2 },
          { x: "60vw", d: 7.8, delay: 2.5 },
          { x: "68vw", d: 6.6, delay: 0.3 },
          { x: "76vw", d: 7.1, delay: 1.8 },
          { x: "84vw", d: 6.2, delay: 2.2 },
          { x: "92vw", d: 7.4, delay: 0.7 },
        ].map((heart, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-sm"
            initial={{ opacity: 0, x: heart.x, y: -20, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              y: "110vh",
              x: [
                heart.x,
                `calc(${heart.x} + 10px)`,
                `calc(${heart.x} - 10px)`,
              ],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.9],
            }}
            transition={{
              duration: heart.d,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear",
            }}
          >
            ❤
          </motion.div>
        ))}

        {/* Glow superior */}
        <div className="absolute w-[700px] h-[700px] bg-[#ff5e95]/20 blur-[120px] rounded-full -top-[200px] -left-[150px] animate-pulse" />

        {/* Glow inferior */}
        <div className="absolute w-[600px] h-[600px] bg-[#ffb6cf]/15 blur-[120px] rounded-full -bottom-[180px] -right-[100px] animate-pulse delay-1000" />

        {/* Onda */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff8eb8]/10 to-transparent skew-x-[-20deg]"
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
          className="uppercase tracking-[0.45em] text-sm text-[#ffc3d6]"
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
            scale: { duration: 6, repeat: Infinity },
          }}
          className="text-7xl md:text-8xl mt-6 font-serif"
        >
          Valentine's Day
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-3 mt-5 text-[#ff8eb8] text-xl"
        >
          <span>❤</span>
          <span>✦</span>
          <span>❤</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-5 uppercase tracking-[0.25em] text-xs text-[#f0bfd0]"
        >
          Doze capítulos que contam a história do nosso amor
        </motion.p>

        <motion.p
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 1.2 }}
  className="mt-8 text-lg max-w-2xl text-[#f6d8e2] leading-relaxed italic mx-auto"
>
  <TypewriterText text="“E assim, página após página, você virou a minha história favorita.”" />
</motion.p>

        {/* 🔥 BOTÃO NOVO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <button
            onClick={handleOpen}
            className="mt-10 inline-block border border-[#ffb6cf] px-9 py-4 rounded-full transition-all duration-500 hover:bg-[#ffb6cf] hover:text-[#1a0d14] hover:scale-105 hover:shadow-[0_0_35px_rgba(255,140,180,0.45)]"
          >
            Abrir o Livro
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.3 }}
          className="mt-16 uppercase tracking-[0.3em] text-xs text-[#c88ca3]"
        >
          Cada página guarda um momento especial ✨
        </motion.p>

      </section>

      {/* 🌑 TRANSIÇÃO CINEMATOGRÁFICA */}
      <AnimatePresence>
        {transition && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.p
                className="text-[#ffb6cf] uppercase tracking-[0.4em] text-sm"
                animate={{ opacity: [0, 1, 0.6, 1] }}
                transition={{ duration: 1.5 }}
              >
                Abrindo o livro...
              </motion.p>

              <motion.div
                className="mt-6 w-16 h-16 border-2 border-[#ffb6cf] border-t-transparent rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
