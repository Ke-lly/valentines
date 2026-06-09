"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEight() {
  const script = [
    {
      text: "Colecionamos dias que nunca serão esquecidos."
    },
    {
      text: "Conversas, passeios, olhares e sorrisos."
    },
    {
      speaker: "Narrador",
      text: "Momentos que pareciam comuns, mas se tornaram eternos."
    },
    {
      text: "Porque foram vividos ao seu lado."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VIII"
      title="Dias Inesquecíveis"
      subtitle="Memórias que o tempo não apaga."
      image="/images/8.JPG"
      script={script}
      endingMessage="Alguns dias merecem ser revividos para sempre."
      nextUrl="/story/chapter-9"
    />
  );
}