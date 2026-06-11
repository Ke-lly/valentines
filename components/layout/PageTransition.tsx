"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="pt-BR">
      <body className="bg-[#050507]"> {/* Cor sólida para evitar o branco */}
        <Navbar />
        <MusicPlayer />
        <GlowBackground />
        <GrainOverlay />

        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}
