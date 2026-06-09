"use client";

import { motion } from "framer-motion";

interface Props {
  message: string;
}

export default function ChapterEnding({ message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="mt-32 mb-20 text-center"
    >
      <div className="w-24 h-px bg-[#d4c1a7]/30 mx-auto mb-10" />

      <p className="text-2xl md:text-3xl italic text-[#e7d8c9] leading-relaxed max-w-3xl mx-auto">
        {message}
      </p>

      <p className="mt-8 uppercase tracking-[0.4em] text-sm text-[#9f8d7a]">
        fim do capítulo
      </p>
    </motion.div>
  );
}