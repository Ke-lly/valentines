"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    setLiberado(localStorage.getItem("jornadaConcluida") === "true");
  }, []);

  // Oculta a navbar na página inicial
  if (pathname === "/") return null;

  // Função para links que DEVEM ser bloqueados
  const getLockedLinkProps = (path: string) => ({
    href: liberado ? path : "#",
    onClick: (e: React.MouseEvent) => !liberado && e.preventDefault(),
    className: `transition ${!liberado ? "opacity-30 cursor-not-allowed" : "hover:text-white"}`
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-700 hover:bg-black/40 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        
        <Link href="/" className="font-serif text-2xl text-[#f5ebe0]">
          Volume XXII
        </Link>

        <div className="flex gap-8 text-xs md:text-sm uppercase tracking-[0.2em] text-[#cfc2b4]">
          {/* ARQUIVO: Sempre acessível, sem bloqueio */}
          <Link href="/archive" className="hover:text-white transition">
            Arquivo
          </Link>
          
          {/* ÁREAS BLOQUEADAS: Apenas estas usam a lógica de bloqueio */}
          <Link {...getLockedLinkProps("/galeria")}>
            Galeria {!liberado && "🔒"}
          </Link>
          
          <Link {...getLockedLinkProps("/carta")}>
            Carta {!liberado && "🔒"}
          </Link>
        </div>
      </div>
    </nav>
  );
}