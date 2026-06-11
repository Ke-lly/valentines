"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Captura a rota atual

  return (
    <AnimatePresence mode="wait">
      {/* A chave 'key={pathname}' avisa o Framer Motion que a página mudou e que ele deve rodar a animação */}
      <motion.div
        key={pathname} 
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
