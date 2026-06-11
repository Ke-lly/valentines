"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ scale: 1.05, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        relative
        w-full
        mt-10 md:mt-16
        rounded-[24px] md:rounded-[40px]
        overflow-hidden
        bg-[#1a0f15]
        border border-[#6d3341]/30
        shadow-[0_0_35px_rgba(122,30,70,0.20)]
        flex
        items-center
        justify-center
        p-2 md:p-4
      "
    >
      <img
        src={src}
        alt="Capítulo"
        className="
          w-full
          h-auto
          max-h-[75vh]
          object-contain
          rounded-[18px]
          transition-transform
          duration-700
          hover:scale-[1.02]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-[24px] md:rounded-[40px]" />
    </motion.div>
  );
}
