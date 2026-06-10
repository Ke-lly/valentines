"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEleven() {
  const script = [
    {
      text: "Você tem um jeito engraçado de deixar qualquer dia melhor."
    },

    {
      text: "Faz piadas sem sentido, fala bobagens e consegue me fazer rir até quando eu tento ficar séria."
    },

    {
      speaker: "Narrador",
      text: "Existe uma leveza em estar ao seu lado que transforma momentos comuns nas melhores lembranças."
    },

    {
      text: "E acho que foi exatamente por isso que, sem perceber, você acabou se tornando a minha pessoa favorita."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="XI"
      title="Você"
      subtitle="É impossível falar da nossa história sem falar do seu jeito."
      image="/images/11.jpg"
      script={script}
      endingMessage="Talvez o meu lugar favorito sempre tenha sido ao seu lado."
      nextUrl="/story/chapter-12"
    />
  );
}
