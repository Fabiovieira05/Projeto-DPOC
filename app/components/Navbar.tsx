"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Usa MutationObserver para aguardar o widget VLibras estar montado antes de clicar.
  // Mais idiomático que polling: reage ao DOM sem temporizadores cegos.
  const handleOpenVLibras = useCallback(() => {
    const btn = document.querySelector('[vw-access-button]') as HTMLElement | null;
    if (btn) {
      btn.click();
      return;
    }

    // Widget ainda não montou — observa o DOM até aparecer (timeout de 3s)
    const observer = new MutationObserver((_mutations, obs) => {
      const el = document.querySelector('[vw-access-button]') as HTMLElement | null;
      if (el) {
        obs.disconnect();
        el.click();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Segurança: desconecta após 3s para não ficar observando eternamente
    setTimeout(() => {
      observer.disconnect();
    }, 3000);
  }, []);

  return (
    <header className="w-full bg-dpoc-green sticky top-0 z-50">
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
          <nav className="hidden md:flex gap-6 text-white/90 mr-2 font-bold">
            <Link href="/" className="hover:underline outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">
              Home
            </Link>
            <Link href="../saiba-mais" className="hover:underline outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">
              Saiba mais
            </Link>
            <Link href="../sobre-nos" className="hover:underline outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">
              Sobre nós
            </Link>
          </nav>

          {/* Botão de alternar tema — sol (claro) / lua (escuro) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-green-500 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {theme === "light" ? (
              /* Ícone de Sol — visível no tema claro, indica "clique para escuro" */
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
            ) : (
              /* Ícone de Lua — visível no tema escuro, indica "clique para claro" */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Adicionado o onClick aqui no botão Desktop */}
          <button
            onClick={handleOpenVLibras}
            className="hidden md:inline-flex rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-800 transition-colors font-bold cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Abrir ferramenta de tradução em Libras"
          >
            VLibras
          </button>

          <button
            className="md:hidden p-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md text-3xl font-bold leading-none cursor-pointer"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "fechar menu" : "abrir menu"}
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay escuro */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Painel lateral direito */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 md:w-80 bg-[#5b8b78] h-full shadow-2xl flex flex-col p-8 pt-12 transform transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >

        {/* Botão Fechar (X) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-green-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
          aria-label="fechar menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links do Menu */}
        <div className="flex flex-col gap-8 text-white mt-12 text-lg">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-green-200 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit">
            Home
          </Link>
          <Link href="../saiba-mais" onClick={() => setOpen(false)} className="hover:text-green-200 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit">
            Saiba mais
          </Link>
          <Link href="../sobre-nos" onClick={() => setOpen(false)} className="hover:text-green-200 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit">
            Sobre nós
          </Link>

          {/* Botão de tema no mobile (Apenas o ícone conforme a imagem) */}
          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="text-left text-white hover:text-green-200 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md w-fit mt-2"
            aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
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
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Botão sólido para VLibras */}
          <button
            onClick={() => {
              handleOpenVLibras();
              setOpen(false);
            }}
            className="mt-6 w-full text-center bg-[#326750] hover:bg-[#204032] py-3 rounded-md font-medium text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            VLibras
          </button>
        </div>
      </div>
    </header>
  );
}