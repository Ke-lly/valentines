"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterThree() {
  const script = [
    {
      text: "Existem risadas que ficam gravadas para sempre."
    },
    {
      text: "Daquelas que fazem qualquer dia parecer especial."
    },
    {
      speaker: "Narrador",
      text: "Sem perceber, os momentos simples começaram a ser os mais importantes."
    },
    {
      text: "Foi ali que entendemos que felicidade também mora nas pequenas coisas."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="III"
      title="Entre Risadas"
      subtitle="Os momentos simples se tornaram inesquecíveis."
      image="/images/3.JPG"
      script={script}
      endingMessage="Cada sorriso virou uma lembrança."
      nextUrl="/story/chapter-4"
    />
  );
}