"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top,#3a1025 0%,#0b0b10 60%,#050507 100%)",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
