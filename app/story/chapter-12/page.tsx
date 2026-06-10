"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwelve() {
  const script = [
    {
      text: "Chegamos à última página."
    },
    {
      text: "E pensar que tudo começou com dois amigos de escola."
    },
    {
      speaker: "Narrador",
      text: "Entre trabalhos, conversas, passeios sem rumo e muitas risadas, fomos escrevendo uma história que aconteceu do jeito mais inesperado possível."
    },
    {
      text: "Descobri que os melhores momentos nunca precisaram ser grandes viagens ou ocasiões especiais."
    },
    {
      text: "Bastava estar com você para um dia comum se tornar uma lembrança que eu gostaria de guardar para sempre."
    },
    {
      text: "E talvez seja exatamente isso que eu mais amo na nossa história: ela é simples, leve, divertida e, ao mesmo tempo, a mais bonita que eu já vivi."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="XII"
      title="12 de Junho"
      subtitle="Uma pequena coleção de memórias."
      image="/images/12.jpg"
      script={script}
      endingMessage="Este livro termina aqui... mas eu espero continuar escrevendo os próximos capítulos ao seu lado. ❤️"
      nextUrl="/carta"
      prevUrl="/story/chapter-11"
      isLast={true}
    />
  );
}
