import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/layout/MusicPlayer";
import GlowBackground from "@/components/effects/GlowBackground";
import GrainOverlay from "@/components/effects/GrainOverlay";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Valentine's Day",
  description: "Uma coleção de memórias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#050507] text-[#ffe4e6]">
        {/* Componentes fixos (não sofrem transição) */}
        <Navbar />
        <MusicPlayer />
        <GlowBackground />
        <GrainOverlay />

        {/* Container do Gradiente: 
           Fica aqui fora para não piscar durante a troca de rotas.
        */}
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">
          <main className="min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
