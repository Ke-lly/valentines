"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSix() {
  const script = [
    {
      text: "Sempre dizem que uma fotografia congela um instante."
    },

    {
      text: "Mas eu acho que ela guarda muito mais do que isso."
    },

    {
      speaker: "Narrador",
      text: "Cada imagem daqui tem uma conversa que ninguém escuta, uma risada que não aparece e um momento que só nós dois sabemos como foi."
    },

    {
      text: "Talvez seja por isso que eu gosto tanto de olhar para essas fotos. Elas sempre conseguem me fazer voltar para o dia em que foram tiradas."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="VI"
      title="Fotografias"
      subtitle="Porque algumas lembranças merecem ser revisitadas."
      image="/images/6.jpg"
      script={script}
      endingMessage="Toda foto é um jeito de viver um momento mais uma vez."
      nextUrl="/story/chapter-7"
    />
  );
}
