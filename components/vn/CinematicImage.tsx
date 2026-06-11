"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-[700px] overflow-hidden rounded-[40px] mt-16"
    >
      <img
        src={src}
        alt=""
        draggable={false}
        className="block w-full h-full object-cover select-none"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </motion.div>
  );
}
