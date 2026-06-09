"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFive() {
  const script = [
    {
      text: "Toda história tem uma trilha sonora."
    },
    {
      text: "Algumas músicas nos levam de volta no tempo."
    },
    {
      speaker: "Narrador",
      text: "Bastam alguns segundos para lembrar exatamente como tudo aconteceu."
    },
    {
      text: "E sorrir novamente."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="V"
      title="Nossa Trilha Sonora"
      subtitle="Cada música guarda um pedaço da nossa história."
      image="/images/5.JPG"
      script={script}
      endingMessage="Ainda escuto essas melodias quando penso em você."
      nextUrl="/story/chapter-6"
    />
  );
}