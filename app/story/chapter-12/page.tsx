"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwelve() {
  const script = [
    {
      text: "Chegamos à última página."
    },
    {
      text: "Mas não ao último capítulo."
    },
    {
      speaker: "Narrador",
      text: "Porque amanhã existirão novas memórias, novas aventuras e novos motivos para sorrir."
    },
    {
      text: "Obrigado por fazer parte da história mais bonita que já vivi."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="XII"
      title="12 de Junho"
      subtitle="Uma pequena coleção de memórias."
      image="/images/12.JPG"
      script={script}
      endingMessage="Fim do capítulo... Mas nunca da nossa história. ❤️"
      nextUrl="/carta"
      prevUrl="/story/chapter-11"
      isLast={true}
    />
  );
}