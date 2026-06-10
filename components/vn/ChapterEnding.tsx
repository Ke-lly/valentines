"use client";

import { motion } from "framer-motion";

interface Props {
  message: string;
}

export default function ChapterEnding({ message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      className="mt-32 mb-20 text-center relative"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#7b1f3d]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Linha Superior */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4c1a7]/50" />

        <div className="w-2 h-2 rounded-full bg-[#d4c1a7]/70" />

        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4c1a7]/50" />
      </div>

      {/* Mensagem */}
      <p className="relative z-10 text-3xl md:text-4xl italic font-serif text-[#f8ede8] leading-relaxed max-w-3xl mx-auto px-6">
        {message}
      </p>

      {/* Assinatura */}
      <p className="mt-10 uppercase tracking-[0.45em] text-xs text-[#c7a98d]">
        fim do capítulo
      </p>

      {/* Linha Inferior */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="w-24 h-px bg-[#d4c1a7]/20" />

        <span className="text-[#d4c1a7]/60 text-lg">♥</span>

        <div className="w-24 h-px bg-[#d4c1a7]/20" />
      </div>
    </motion.div>
  );
}