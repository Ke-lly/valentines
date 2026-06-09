"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterNine() {
  const script = [
    {
      text: "Sem perceber, começamos a falar do amanhã."
    },
    {
      text: "Como se o futuro já estivesse nos esperando."
    },
    {
      speaker: "Narrador",
      text: "Planos simples ganharam um significado enorme."
    },
    {
      text: "Porque agora eles eram nossos."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="IX"
      title="Planos"
      subtitle="Sonhos compartilhados."
      image="/images/9.JPG"
      script={script}
      endingMessage="Ainda existem muitas páginas para escrever."
      nextUrl="/story/chapter-10"
    />
  );
}