"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSix() {
  const script = [
    {
      text: "Alguns instantes merecem durar para sempre."
    },
    {
      text: "Por isso existem as fotografias."
    },
    {
      speaker: "Narrador",
      text: "Elas não congelam apenas imagens, mas sentimentos."
    },
    {
      text: "Cada foto é um pedacinho da nossa história."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VI"
      title="Fotografias"
      subtitle="Momentos guardados para sempre."
      image="/images/6.jpg"
      script={script}
      endingMessage="As memórias continuam vivas."
      nextUrl="/story/chapter-7"
    />
  );
}