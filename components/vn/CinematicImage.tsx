"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
  onLoaded?: () => void;
}

export default function CinematicImage({ src, onLoaded }: Props) {
  return (
    <motion.div
      key={src}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center w-full"
    >
      <img
        src={src}
        alt=""
        draggable={false}
        onLoad={onLoaded}
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
