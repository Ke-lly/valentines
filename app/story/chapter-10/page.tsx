"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTen() {
  const script = [
    {
      text: "Às vezes eu paro para pensar em como tudo aconteceu."
    },

    {
      text: "De colegas de escola, para amigos, de amigos para a pessoa que faz parte dos meus dias."
    },

    {
      speaker: "Narrador",
      text: "Sem grandes reviravoltas, apenas dois caminhos que decidiram continuar andando lado a lado."
    },

    {
      text: "E olhando para tudo o que vivemos até aqui, eu percebo que não mudaria absolutamente nada."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="X"
      title="Hoje"
      subtitle="Tudo nos trouxe exatamente até este momento."
      image="/images/10.jpg"
      script={script}
      endingMessage="Se a história recomeçasse, eu escolheria você outra vez."
      nextUrl="/story/chapter-11"
    />
  );
}
