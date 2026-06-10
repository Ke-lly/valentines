"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEight() {
  const script = [
    {
      text: "A gente nunca precisou de grandes aventuras para criar boas lembranças."
    },

    {
      text: "Um cinema, uma volta sem destino ou qualquer desculpa para passar um tempo junto já era suficiente."
    },

    {
      speaker: "Narrador",
      text: "Os dias mais especiais quase nunca foram planejados. Eles simplesmente aconteceram, entre conversas, piadas ruins e muitos sorrisos."
    },

    {
      text: "Hoje eu percebo que os momentos que mais gosto de lembrar são exatamente aqueles em que não existia pressa, só nós dois."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VIII"
      title="Dias Inesquecíveis"
      subtitle="Os melhores momentos sempre foram os mais simples."
      image="/images/8.jpg"
      script={script}
      endingMessage="Porque qualquer dia comum fica inesquecível quando é vivido ao seu lado."
      nextUrl="/story/chapter-9"
    />
  );
}
