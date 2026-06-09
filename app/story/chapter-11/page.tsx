"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEleven() {
  const script = [
    {
      text: "Existem sentimentos difíceis de explicar."
    },
    {
      text: "Mesmo assim, vale a pena tentar."
    },
    {
      speaker: "Narrador",
      text: "Porque algumas pessoas merecem ouvir o quanto são especiais."
    },
    {
      text: "Mesmo quando as palavras parecem pequenas demais."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="XI"
      title="Uma Carta"
      subtitle="Palavras escritas com carinho."
      image="/images/11.JPG"
      script={script}
      endingMessage="Alguns sentimentos vivem além das palavras."
      nextUrl="/story/chapter-12"
    />
  );
}