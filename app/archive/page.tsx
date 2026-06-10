"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const chaptersData = [
  {
    id: 1,
    title: "O Começo",
    desc: "Toda história inesquecível começa com um simples encontro.",
  },
  {
    id: 2,
    title: "Primeiras Conversas",
    desc: "Quando horas pareciam minutos.",
  },
  {
    id: 3,
    title: "Entre Risadas",
    desc: "Momentos que transformaram dias comuns em lembranças especiais.",
  },
  {
    id: 4,
    title: "Pequenos Detalhes",
    desc: "São eles que fazem toda a diferença.",
  },
  {
    id: 5,
    title: "Nossa Trilha Sonora",
    desc: "Cada música guarda um pedaço da nossa história.",
  },
  {
    id: 6,
    title: "Fotografias",
    desc: "Instantes congelados para sempre.",
  },
  {
    id: 7,
    title: "Abraços que Viraram Casa",
    desc: "O lugar mais seguro sempre foi ao seu lado.",
  },
  {
    id: 8,
    title: "Dias Inesquecíveis",
    desc: "As memórias que sempre nos fazem sorrir.",
  },
  {
    id: 9,
    title: "Promessas",
    desc: "Algumas foram ditas, outras apenas sentidas.",
  },
  {
    id: 10,
    title: "Planos",
    desc: "Sonhos que agora pertencem a nós dois.",
  },
  {
    id: 11,
    title: "Hoje",
    desc: "Tudo o que vivemos nos trouxe exatamente até aqui.",
  },
  {
    id: 12,
    title: "12 de Junho",
    desc: "Uma coleção de memórias criada especialmente para você.",
  },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen text-[#fff6f8] px-4 md:px-8 pt-28 pb-20 relative overflow-hidden bg-[radial-gradient(circle_at_top,#56172d_0%,#180812_45%,#060507_100%)]">

      {/* Glow superior */}
      <div className="absolute w-[650px] h-[650px] bg-[#b03b65]/15 blur-[140px] rounded-full -top-[220px] -left-[150px] pointer-events-none" />

      {/* Glow inferior */}
      <div className="absolute w-[500px] h-[500px] bg-[#ffb8c8]/8 blur-[120px] rounded-full -bottom-[180px] -right-[120px] pointer-events-none" />

      {/* Textura */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#ffffff 1px,transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <Link
          href="/"
          className="inline-block text-[#f1c9d5] hover:text-white transition duration-300 mb-8"
        >
          ← Fechar o Livro
        </Link>

        <p className="uppercase tracking-[0.45em] text-xs text-[#d89fb2]">
          Valentine's Day Edition
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mt-4">
          Sumário
        </h1>

        <p className="mt-6 text-[#e5ccd4] text-lg max-w-2xl leading-relaxed">
          Cada capítulo guarda um instante da nossa história,
          daqueles que fazem o tempo parar e permanecem vivos
          sempre que voltamos a lembrar.
        </p>

        <div className="grid md:grid-cols-2 gap-7 mt-14">
          {chaptersData.map((chapter) => (
            <Link key={chapter.id} href={`/story/chapter-${chapter.id}`}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                className="
                  h-full
                  rounded-3xl
                  p-7
                  border
                  border-[#6d2943]
                  bg-[#2a1018]/75
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#f0c6d4]
                  hover:bg-[#34131e]/85
                  hover:shadow-[0_0_40px_rgba(240,198,212,0.15)]
                "
              >
                <p className="uppercase tracking-[0.25em] text-xs text-[#eab5c5]">
                  Capítulo {chapter.id}
                </p>

                <h2 className="text-3xl font-serif mt-4 text-white">
                  {chapter.title}
                </h2>

                <p className="mt-4 text-[#d8c3ca] leading-relaxed">
                  {chapter.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.8 }}
          className="text-center mt-16 uppercase tracking-[0.35em] text-xs text-[#b88698]"
        >
          12 capítulos • uma única história
        </motion.p>
      </motion.div>
    </main>
  );
}