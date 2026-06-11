"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      // Use aspect-ratio em vez de altura fixa para manter a proporção
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[40px] mt-16"
    >
      <Image
        src={src}
        alt="Memória"
        fill
        priority // Carrega a imagem imediatamente
        sizes="(max-width: 768px) 100vw, 800px"
        className="object-cover select-none"
        draggable={false}
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </motion.div>
  );
}
