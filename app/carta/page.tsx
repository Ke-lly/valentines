"use client"; 

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LetterPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasCompleted = localStorage.getItem("storyCompleted");

    if (hasCompleted === "true") {
      setIsUnlocked(true);

      setTimeout(() => {
        setShowLetter(true);
      }, 2500);
    } else {
      router.push("/story/chapter-1");
    }
  }, [router]);

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]" />
    );
  }

  if (!showLetter) {
    return (
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">

        <div className="absolute w-[700px] h-[700px] bg-[#7a1e46]/20 blur-[160px] rounded-full" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-center px-6"
        >
          <p className="uppercase tracking-[0.45em] text-sm text-[#e6c7a1]">
            Valentine's Day
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mt-8 leading-tight text-[#fff5ef]">
            Você chegou à última página.
          </h1>

          <p className="mt-8 text-[#d7c7b8] italic text-lg max-w-xl mx-auto leading-relaxed">
            Existe apenas mais uma coisa que eu gostaria que você lesse...
          </p>
        </motion.div>

      </main>
    );
  }

  return (
    <main className="min-h-screen text-[#f5ebe0] px-4 pt-28 pb-20 relative overflow-hidden bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">

      {/* Glows */}
      <div className="absolute w-[700px] h-[700px] bg-[#7a1e46]/20 blur-[170px] rounded-full -top-[220px] -left-[220px] pointer-events-none" />

      <div className="absolute w-[500px] h-[500px] bg-[#d4c1a7]/10 blur-[140px] rounded-full -bottom-[120px] -right-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="w-full max-w-4xl mx-auto relative z-10"
      >
        <div
          className="
            relative
            overflow-hidden
            bg-[#2a1418]/75
            backdrop-blur-xl
            border border-[#6d3341]/40
            rounded-[40px]
            p-8
            md:p-16
            shadow-[0_0_80px_rgba(122,30,70,0.25)]
          "
        >

          {/* brilho */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5d1d37]/10 via-transparent to-[#d4c1a7]/5 pointer-events-none" />

          {/* textura */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle,#f5ebe0 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">

            <p className="uppercase tracking-[0.45em] text-sm text-[#e6c7a1]">
              Última Página
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mt-6 leading-tight text-[#fff5ef]">
              Meu amor,
            </h1>

            <div className="mt-12 space-y-8 text-[#efe2d8] leading-relaxed text-lg md:text-xl">

              <p>
                Se você chegou até aqui, significa que percorreu cada capítulo
                desta pequena coleção de memórias.
              </p>

              <p>
                Talvez nenhuma fotografia consiga guardar exatamente como cada
                momento foi. Nenhuma música consiga repetir a sensação de um
                abraço. Nenhuma palavra consiga explicar completamente tudo o
                que sinto.
              </p>

              <p>
                Mesmo assim, eu quis tentar.
              </p>

              <p>
                Cada página foi criada para lembrar que os instantes mais
                simples acabaram se tornando os mais importantes justamente
                porque foram vividos ao seu lado.
              </p>

              <p>
                Obrigado por cada conversa longa, por cada risada sem motivo,
                por cada sonho compartilhado e por transformar dias comuns em
                lembranças que quero guardar para sempre.
              </p>

              <p>
                Este capítulo termina aqui.
              </p>

              <p>
                Mas espero que a nossa história continue escrevendo novos
                capítulos, novas aventuras, novas fotografias e novos motivos
                para sorrir.
              </p>

              <motion.p
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[#fff5ef] font-serif text-4xl pt-10 text-center"
              >
                Feliz Dia dos Namorados ❤️
              </motion.p>

              <div className="mt-20 pt-10 border-t border-[#d4c1a7]/20 text-right">

                <p className="text-[#e6c7a1] italic tracking-wide">
                  Com todo o meu amor,
                </p>

                <p className="text-3xl font-serif mt-3 text-[#fff5ef]">
                  Kelly
                </p>

              </div>

            </div>

          </div>

        </div>
      </motion.div>
    </main>
  );
}
