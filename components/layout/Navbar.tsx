"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    const update = () => {
      const value = localStorage.getItem("jornadaConcluida") === "true";
      setLiberado(value);
    };

    update();

    window.addEventListener("jornada:liberada", update);
    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("jornada:liberada", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  if (pathname === "/") return null;

  const LockedLink = ({ href, children }: any) => {
    return (
      <Link
        href={liberado ? href : "#"}
        onClick={(e) => !liberado && e.preventDefault()}
        className={`transition ${
          liberado
            ? "hover:text-white"
            : "opacity-40 cursor-not-allowed pointer-events-none"
        }`}
      >
        {children}
      </Link>
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
          <LockedLink href="/galeria">Galeria</LockedLink>
          <LockedLink href="/carta">Carta</LockedLink>
        </div>
      </div>
    </nav>
  );
}
