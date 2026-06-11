"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      key={src}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="flex justify-center w-full"
    >
      <img
        src={src}
        alt=""
        draggable={false}
        className="
          block
          w-auto
          max-w-full
          h-auto
          max-h-[75vh]
          rounded-[28px]
          object-contain
          select-none
        "
      />
    </motion.div>
  );
}
