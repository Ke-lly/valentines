"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterOne() {
  const script = [
    {
      text: "Toda história começa de um jeito simples."
    },

    {
      text: "Às vezes com uma mensagem."
    },

    {
      text: "Às vezes com um olhar."
    },

    {
      speaker: "Narrador",
      text: "Sem perceber, duas vidas começaram a escrever o mesmo capítulo."
    },

    {
      text: "E o que parecia apenas mais um dia acabou se tornando o início de tudo."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="I"
      title="O Começo"
      subtitle="Algumas histórias simplesmente acontecem."
      image="/images/1.JPG"
      script={script}
      endingMessage="Foi aqui que tudo começou."
      nextUrl="/story/chapter-2"
    />
  );
}