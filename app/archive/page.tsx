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
    <main className="min-h-screen text-[#f5ebe0] px-4 md:px-8 pt-28 pb-20 relative overflow-hidden bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">
         
      {/* Glow decorativo */}
      <div className="absolute w-[500px] h-[500px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] right-[-100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <Link
          href="/"
          className="inline-block text-[#d4c1a7] hover:text-white transition mb-6"
        >
          ← Fechar o Livro
        </Link>

        <h1 className="text-4xl md:text-6xl font-serif">
          Sumário
        </h1>

        <p className="mt-4 text-[#cfc2b4] text-lg max-w-xl leading-relaxed">
          Cada capítulo guarda um instante da nossa história,
          daqueles que merecem ser lembrados para sempre.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {chaptersData.map((chapter) => (
            <Link key={chapter.id} href={`/story/chapter-${chapter.id}`}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
                className="border border-[#3a1c22] bg-[#2a1418]/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 h-full cursor-pointer hover:border-[#d4c1a7]/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,193,167,0.12)]"
              >
                <p className="uppercase text-xs tracking-[0.25em] text-[#d4c1a7]">
                  Capítulo {chapter.id}
                </p>

                <h2 className="text-2xl md:text-3xl mt-3 font-serif">
                  {chapter.title}
                </h2>

                <p className="mt-3 text-[#cfc2b4] text-sm md:text-base leading-relaxed">
                  {chapter.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

