"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [liberado, setLiberado] = useState(false);

  // 🔓 sincroniza estado corretamente + escuta desbloqueio
  useEffect(() => {
    const update = () => {
      setLiberado(localStorage.getItem("jornadaConcluida") === "true");
    };

    update();

    window.addEventListener("jornada:liberada", update);

    return () => {
      window.removeEventListener("jornada:liberada", update);
    };
  }, []);

  if (pathname === "/") return null;

  const LockedLink = ({ href, children }: any) => {
    return (
      <motion.div className="flex items-center gap-2 relative">
        <Link
          href={liberado ? href : "#"}
          onClick={(e) => !liberado && e.preventDefault()}
          className={`transition ${
            liberado
              ? "hover:text-white"
              : "opacity-40 blur-[1px] cursor-not-allowed"
          }`}
        >
          {children}
        </Link>

        <AnimatePresence mode="wait">
          {!liberado ? (
            <motion.span
              key="lock"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
              transition={{ duration: 0.25 }}
              className="text-xs"
            >
              🔒
            </motion.span>
          ) : (
            <motion.span
              key="unlock"
              initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
              animate={{
                opacity: 1,
                scale: [0.3, 1.2, 1],
                rotate: 0,
              }}
              transition={{ duration: 0.6 }}
              className="text-green-300 text-xs"
            >
              🔓
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700 hover:bg-black/40 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-serif text-2xl text-[#f5ebe0]">
          Valentine's Day
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 text-xs md:text-sm uppercase tracking-[0.2em] text-[#cfc2b4]">
          <Link href="/archive" className="hover:text-white transition">
            Arquivo
          </Link>

          <LockedLink href="/galeria">Galeria</LockedLink>
          <LockedLink href="/carta">Carta</LockedLink>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden gap-4 text-[10px] uppercase tracking-widest text-[#cfc2b4]">
          <Link href="/archive">Arquivo</Link>
          <LockedLink href="/galeria">Gal</LockedLink>
          <LockedLink href="/carta">Cart</LockedLink>
        </div>
      </div>
    </nav>
  );
}
