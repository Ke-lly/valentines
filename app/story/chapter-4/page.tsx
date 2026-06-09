"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFour() {
  const script = [
    {
      text: "O amor nunca chega fazendo barulho."
    },
    {
      text: "Ele aparece nos pequenos detalhes."
    },
    {
      speaker: "Narrador",
      text: "Um olhar demorado, uma mensagem inesperada, uma preocupação sincera."
    },
    {
      text: "Foi assim que tudo começou a ganhar significado."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="IV"
      title="Pequenos Detalhes"
      subtitle="São eles que mudam tudo."
      image="/images/4.JPG"
      script={script}
      endingMessage="As melhores histórias são feitas de detalhes."
      nextUrl="/story/chapter-5"
    />
  );
}