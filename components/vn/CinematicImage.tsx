"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      key={src}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="flex justify-center w-full"
    >
      <Image
        src={src}
        alt=""
        width={1200}
        height={1600}
        priority
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
