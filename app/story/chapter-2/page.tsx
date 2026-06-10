"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwo() {
  const script = [
    {
      text: "As conversas começaram sem pretensão."
    },

    {
      text: "Minutos viraram horas."
    },

    {
      text: "E horas passaram a parecer segundos."
    },

    {
      speaker: "Narrador",
      text: "Sem perceber, já existia um lugar reservado para você em cada pensamento."
    },

    {
      text: "Era impossível não esperar pela próxima mensagem."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="II"
      title="Primeiras Conversas"
      subtitle="Quando o tempo começou a passar diferente."
      image="/images/2.jpg"
      script={script}
      endingMessage="Cada palavra aproximava um pouco mais."
      nextUrl="/story/chapter-3"
    />
  );
}