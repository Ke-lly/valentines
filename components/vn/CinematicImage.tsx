"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center mt-10 md:mt-16"
    >
      <div
        className="
          inline-block
          bg-[#2a1418]/80
          backdrop-blur-xl
          border border-[#6d3341]/40
          rounded-[24px]
          p-3
          shadow-[0_0_35px_rgba(122,30,70,0.20)]
        "
      >
        <img
          src={src}
          alt="Capítulo"
          className="
            block
            max-w-full
            w-auto
            h-auto
            max-h-[75vh]
            rounded-[18px]
            object-contain
          "
        />
      </div>
    </motion.div>
  );
}
