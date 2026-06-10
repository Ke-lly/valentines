"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFour() {
  const script = [
    {
      text: "Descobri que o amor não aparece só nas grandes declarações."
    },
    {
      text: "Ele mora nas caminhadas sem destino, nas conversas demoradas e no jeito que qualquer lugar fica melhor quando você está comigo."
    },
    {
      speaker: "Narrador",
      text: "Sem grandes viagens ou momentos extraordinários, dois corações aprenderam que felicidade pode ser simplesmente estar lado a lado."
    },
    {
      text: "E foi nos detalhes mais simples que eu encontrei o lugar onde sempre quero voltar."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="IV"
      title="Pequenos Detalhes"
      subtitle="Os momentos mais simples acabaram sendo os mais especiais."
      image="/images/4.jpg"
      script={script}
      endingMessage="Porque o melhor destino sempre foi estar com você."
      nextUrl="/story/chapter-5"
    />
  );
}
