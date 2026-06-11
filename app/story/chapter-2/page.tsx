"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwo() {
  const script = [
    {
      text: "A gente já se conhecia há muito tempo."
    },

    {
      text: "Éramos aqueles amigos de escola que apenas tinham amigos em comum e acabavam ficando nas mesmas equipes."
    },

    {
      text: "Mas, no último ano, alguma coisa mudou sem fazer barulho."
    },

    {
      speaker: "Narrador",
      text: "As conversas ficaram mais frequentes, as risadas mais demoradas e a vontade de estar perto apareceu naturalmente."
    },

    {
      text: "Sem perceber, uma amizade começou a escrever uma história completamente nova."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="II"
      title="Primeiras Conversas"
      subtitle="Quando a amizade começou a ganhar outro significado."
      image="/images/2.jpg"
      script={script}
      endingMessage="Foi ali que tudo começou a fazer sentido."
      nextUrl="/story/chapter-3"
    />
  );
}
