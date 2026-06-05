"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Função que procura o botão original do VLibras e simula um clique nele
  const handleOpenVLibras = () => {
    const defaultButton = document.querySelector('[vw-access-button]') as HTMLElement;
    if (defaultButton) {
      defaultButton.click();
    }
  };

  return (
    <header className="w-full bg-dpoc-green">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/DPOC.png"
              alt="DPOC"
              width={120}
              height={32}
              priority
              className="w-auto h-auto max-h-8 md:max-h-10 object-contain"
            />
            <span className="sr-only">DPOC</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-white/90 mr-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="../saiba-mais" className="hover:underline">
              Saiba mais
            </Link>
            <Link href="../sobre-nos" className="hover:underline">
              Sobre nós
            </Link>
          </nav>
          <button
            aria-label="Alternar entre tema claro e escuro"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md  text-white hover:bg-green-500 transition-colors"
          >
            {/* Ícone de sol (tema claro) e lua (tema escuro) - acessível por aria-label */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          {/* Adicionado o onClick aqui no botão Desktop */}
          <button
            onClick={handleOpenVLibras}
            className="hidden md:inline-flex rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-800 transition-colors"
          >
            VLibras
          </button>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((s) => !s)}
            aria-label="abrir menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-dpoc-green text-white border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="../saiba-mais" onClick={() => setOpen(false)}>Saiba mais</Link>
            <Link href="../sobre-nos" onClick={() => setOpen(false)}>Sobre nós</Link>

            {/* Adicionado o botão no menu Mobile para não quebrar a acessibilidade no celular */}
            <button
              onClick={() => {
                handleOpenVLibras();
                setOpen(false); // Fecha o menu ao abrir o VLibras
              }}
              className="text-left font-bold text-green-200"
            >
              Ativar VLibras
            </button>
          </div>
        </div>
      )}
    </header>
  );
}