"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSeven() {
  const script = [
    {
      text: "Existe um lugar onde tudo fica em paz."
    },
    {
      text: "E esse lugar pode ser um abraço."
    },
    {
      speaker: "Narrador",
      text: "Foi ali que qualquer medo parecia desaparecer."
    },
    {
      text: "Como se o mundo inteiro ficasse em silêncio por alguns segundos."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VII"
      title="Abraços"
      subtitle="O lugar mais seguro do mundo."
      image="/images/7.jpg"
      script={script}
      endingMessage="Casa também pode ser uma pessoa."
      nextUrl="/story/chapter-8"
    />
  );
}