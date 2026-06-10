"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSeven() {
  const script = [
    {
      text: "Nunca entendi muito bem por que o tempo passa diferente quando estou com você."
    },
    {
      text: "Pode ser um passeio simples, uma conversa qualquer ou só alguns minutos sem fazer nada."
    },
    {
      speaker: "Narrador",
      text: "Sem perceber, aquele lugar deixou de ser importante. O que fazia tudo valer a pena era simplesmente a companhia."
    },
    {
      text: "E foi assim que descobri que paz tem o seu sorriso, a sua voz e o jeito bobo que só você consegue ter."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VII"
      title="Abraços"
      subtitle="Porque o melhor lugar sempre foi ao seu lado."
      image="/images/7.jpg"
      script={script}
      endingMessage="Algumas pessoas fazem o mundo inteiro parecer mais leve."
      nextUrl="/story/chapter-8"
    />
  );
}
