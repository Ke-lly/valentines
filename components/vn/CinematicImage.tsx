"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="relative w-full h-[700px] overflow-hidden rounded-[40px] mt-16"
    >


<img 
  src={src} 
  className="w-full h-full object-cover" // <-- Se estiver 'object-cover', ele corta a imagem para preencher.
/>


      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  );
}