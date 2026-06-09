"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTen() {
  const script = [
    {
      text: "Olhar para trás é perceber o quanto caminhamos."
    },
    {
      text: "Cada momento nos trouxe exatamente até aqui."
    },
    {
      speaker: "Narrador",
      text: "E, se pudesse escolher novamente, faria tudo igual."
    },
    {
      text: "Porque foi assim que encontrei você."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="X"
      title="Hoje"
      subtitle="O presente mais bonito."
      image="/images/10.JPG"
      script={script}
      endingMessage="E eu escolheria tudo outra vez."
      nextUrl="/story/chapter-11"
    />
  );
}