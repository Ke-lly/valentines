"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFive() {
  const script = [
    {
      text: "A gente nunca precisou de uma música para lembrar um do outro."
    },

    {
      text: "Nossas melhores lembranças nasceram no meio de conversas aleatórias e risadas sem motivo."
    },

    {
      speaker: "Narrador",
      text: "Cada passeio ganhou uma trilha diferente: o barulho da cidade, o silêncio do caminho e duas pessoas falando sobre qualquer coisa."
    },

    {
      text: "Talvez a nossa história nunca tenha tido uma canção. Mas sempre teve a sua risada, e isso sempre foi suficiente."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="V"
      title="Sem Trilha Sonora"
      subtitle="Porque a sua risada sempre foi a minha música favorita."
      image="/images/5.jpg"
      script={script}
      endingMessage="Algumas histórias não precisam de uma canção para serem inesquecíveis."
      nextUrl="/story/chapter-6"
    />
  );
}
