"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterNine() {
  const script = [
    {
      text: "Existe uma pergunta que você faz quase todos os dias."
    },

    {
      text: "E, por mais que eu já espere por ela, ela sempre consegue me fazer sorrir."
    },

    {
      speaker: "Narrador",
      text: "Entre brincadeiras, risadas e aquele seu jeito completamente bobo, o futuro deixou de parecer distante."
    },

    {
      text: "Talvez seja isso que o amor faça: transformar um simples 'quer casar comigo?' em um motivo para imaginar uma vida inteira ao lado de alguém."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="IX"
      title="Planos"
      subtitle="Alguns sonhos começam com uma pergunta repetida todos os dias."
      image="/images/9.jpg"
      script={script}
      endingMessage="Ainda existem muitos 'sim' esperando para acontecer."
      nextUrl="/story/chapter-10"
    />
  );
}
