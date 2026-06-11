"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex justify-center w-full"
    >
      <img
        src={src}
        alt=""
        className="
          w-auto
          max-w-full
          h-auto
          max-h-[75vh]
          rounded-[28px]
          object-contain
          select-none
        "
        draggable={false}
      />
    </motion.div>
  );
}
