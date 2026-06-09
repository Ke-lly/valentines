
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
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]" />;
}

if (!showLetter) {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">

      <div className="absolute w-[500px] h-[500px] bg-[#8c6a5d]/10 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center px-6"
      >
        <p className="uppercase tracking-[0.45em] text-sm text-[#d4c1a7]">
          Valentine's Day
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mt-8 leading-tight">
          Você chegou à última página.
        </h1>

        <p className="mt-8 text-[#bcae9d] italic text-lg max-w-xl mx-auto">
          Existe apenas mais uma coisa que eu gostaria que você lesse...
        </p>
      </motion.div>

    </main>
  );
}

  return (
    <main className="min-h-screen text-[#f5ebe0] px-4 pt-28 pb-20 relative bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">

      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] left-[-200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-[#151515]/90 border border-[#2a2a2a] backdrop-blur-xl rounded-[40px] p-8 md:p-16 shadow-2xl">

          <p className="uppercase tracking-[0.4em] text-sm text-[#d4c1a7]">
            Última Página
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif break-words mt-6 leading-tight">
            Para você,
          </h1>

          <div className="mt-12 space-y-8 text-[#d8cdc0] leading-relaxed text-lg md:text-xl">

            <p>
              Se você chegou até aqui, significa que percorreu cada capítulo
              desta pequena coleção de memórias.
            </p>

            <p>
              Talvez nenhuma fotografia consiga guardar exatamente como cada
              momento foi. Nenhuma música consiga repetir a sensação de um
              abraço. Nenhuma palavra consiga explicar completamente tudo o que
              sinto.
            </p>

            <p>
              Mesmo assim, eu quis tentar.
            </p>

            <p>
              Cada página foi criada para lembrar que os instantes mais simples
              acabaram se tornando os mais importantes justamente porque foram
              vividos ao seu lado.
            </p>

            <p>
              Obrigado por cada conversa longa, por cada risada sem motivo,
              por cada sonho compartilhado e por transformar dias comuns em
              lembranças que quero guardar para sempre.
            </p>

            <p>
              Este Volume XII termina aqui.
            </p>

            <p>
              Mas espero que a nossa história continue escrevendo novos
              capítulos, novas aventuras, novas fotografias e novos motivos
              para sorrir.
            </p>

            <p className="text-[#f5ebe0] font-serif text-3xl pt-10 text-center">
              Feliz Dia dos Namorados ❤️
            </p>

            <div className="mt-16 pt-8 border-t border-white/10 text-right">
              <p className="text-[#d4c1a7] italic">
                Com todo o meu carinho,
              </p>

              <p className="text-2xl font-serif mt-2">
                Kelly
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </main>
  );
}

