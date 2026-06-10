"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterThree() {
  const script = [
    {
      text: "Depois que começamos a sair, ficou impossível passar muito tempo sem dar risada."
    },
    {
      text: "Você sempre encontra um jeito de falar alguma bobagem no momento certo."
    },
    {
      speaker: "Narrador",
      text: "E, de repente, passeios simples, conversas aleatórias e piadas sem sentido passaram a ser os melhores momentos do dia."
    },
    {
      text: "Foi assim que eu descobri que paz também pode vir acompanhada de muitas gargalhadas."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="III"
      title="Entre Risadas"
      subtitle="Porque os melhores momentos sempre acontecem ao seu lado."
      image="/images/3.jpg"
      script={script}
      endingMessage="Entre todas as lembranças, as minhas favoritas sempre têm o seu sorriso."
      nextUrl="/story/chapter-4"
    />
  );
}
