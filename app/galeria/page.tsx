"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  "/images/1.jpg",
  "/images/10.jpg",
  "/images/1090.jpg",
  "/images/1147.jpg",
  "/images/12.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/858.jpg",
  "/images/9.jpg",
  "/images/993.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen text-[#f5ebe0] px-5 md:px-8 pt-28 md:pt-32 pb-20 overflow-hidden relative bg-[radial-gradient(circle_at_top,#3a1025_0%,#0b0b10_60%,#050507_100%)]">

      {/* Glows */}
      <div className="absolute w-[700px] h-[700px] bg-[#7a1e46]/20 blur-[180px] rounded-full -top-[250px] -right-[250px]" />

      <div className="absolute w-[500px] h-[500px] bg-[#d4c1a7]/10 blur-[150px] rounded-full -bottom-[120px] -left-[120px]" />

      {/* Textura */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#f5ebe0 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-sm text-[#e6c7a1]">
            Valentine's Day
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-6">
            Nossa Galeria
          </h1>

          <p className="mt-6 text-[#d6c8ba] text-base md:text-lg max-w-2xl mx-auto leading-relaxed italic">
            Algumas lembranças merecem permanecer exatamente como foram vividas:
            espontâneas, simples e inesquecíveis.
          </p>
        </motion.div>

        {/* GALERIA ESTILO ÁLBUM */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-16 md:mt-20">

          {photos.map((photo, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                rotate: 0,
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`group break-inside-avoid mb-6 ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0`}
            >

              <div
                className="
                  overflow-hidden
                  rounded-[26px]
                  p-3
                  bg-[#2a1418]/75
                  backdrop-blur-xl
                  border border-[#6d3341]/40
                  shadow-[0_0_35px_rgba(122,30,70,0.20)]
                  transition-all
                  duration-500
                  group-hover:border-[#e6c7a1]/60
                  group-hover:shadow-[0_0_60px_rgba(212,193,167,0.20)]
                "
              >

                <Image
                  src={photo}
                  alt={`Memória ${index + 1}`}
                  width={900}
                  height={1200}
                  className="
                    w-full
                    h-auto
                    rounded-[18px]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </main>
  );
}

