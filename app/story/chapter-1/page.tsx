"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterOne() {
  const script = [
    {
      text: "Toda história começa de um jeito simples."
    },

    {
      text: "A nossa começou em uma sala de aula, entre trabalhos e equipes."
    },

    {
      text: "Naquela época, eu nem imaginava que você se tornaria a minha pessoa favorita."
    },

    {
      speaker: "Narrador",
      text: "Sem fazer barulho, uma amizade começou a escrever uma história muito maior."
    },

    {
      text: "E o que parecia apenas mais um ano de escola acabou sendo o começo de tudo."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="I"
      title="O Começo"
      subtitle="Algumas histórias simplesmente acontecem."
      image="/images/1.jpg"
      script={script}
      endingMessage="Foi aqui que tudo começou."
      nextUrl="/story/chapter-2"
    />
  );
}
