"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterOne() {
  const script = [
    {
      text: "Se alguém tivesse me contado, naquela época da escola, que eu estaria escrevendo isso para você, eu nunca acreditaria."
    },

    {
      text: "A gente era só dois amigos fazendo trabalhos e dividindo algumas equipes."
    },

    {
      text: "Tudo parecia completamente normal... até deixar de ser."
    },

    {
      speaker: "Kelly",
      text: "Sem perceber, você começou a ocupar um espaço que antes era só seu amigo."
    },

    {
      text: "E foi assim, do jeito mais simples possível, que a nossa história começou."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="I"
      title="Tudo Começou Assim"
      subtitle="Quando a amizade decidiu virar amor."
      image="/images/1.jpg"
      script={script}
      endingMessage="Quem diria que aqueles dias na escola seriam o começo de tudo?"
      nextUrl="/story/chapter-2"
    />
  );
}      nextUrl="/story/chapter-2"
    />
  );
}
