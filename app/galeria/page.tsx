"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Importante para otimização

const photos = [
  "/images/23.JPG",
  "/images/24.JPG",
  "/images/25.JPG",
  "/images/26.jpg",
  "/images/27.JPG",
  "/images/28.JPG",
  "/images/29.JPG",
  "/images/30.JPG",
  "/images/31.JPG",
  "/images/32.jpg",
  "/images/33.jpg",
  "/images/34.JPG",
];

export default function GalleryPage() {
  return (
<main className="min-h-screen text-[#f5ebe0] px-8 pt-32 pb-20 overflow-hidden bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] right-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-serif">Galeria</h1>
          <p className="mt-6 text-[#cfc2b4] text-lg">
            Fragmentos de uma história cuidadosamente registrada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative h-[420px] rounded-[10px] overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a] p-3 shadow-xl transition-all"
            >
              {/* Imagem real */}
              <Image 
                src={photo} 
                alt={`Memória ${index + 23}`}
                fill
                className="object-cover rounded-[5px]"
              />
              
              {/* Opcional: Um efeito de sobreposição para manter o estilo elegante */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}