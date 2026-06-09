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
      <body className="bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">
        <Navbar />
        <MusicPlayer />
        <GlowBackground />
        <GrainOverlay />

      
<main className="min-h-screen">
  <PageTransition>
    {children}
  </PageTransition>
</main>
      </body>
    </html>
  );
}