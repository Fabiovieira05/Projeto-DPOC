"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-dpoc-green">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
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
            <Link href="#" className="hover:underline">
              Home
            </Link>
            <Link href="#" className="hover:underline">
              Saiba mais
            </Link>
            <Link href="#" className="hover:underline">
              Sobre nós
            </Link>
          </nav>
          <button
            aria-label="alternar tema"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white"
          >
            ☾
          </button>
          <button className="hidden md:inline-flex rounded-md bg-white/10 px-3 py-1 text-white">
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
        <div className="md:hidden bg-dpoc-green text-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="#">Home</Link>
            <Link href="#">Saiba mais</Link>
            <Link href="#">Sobre nós</Link>
          </div>
        </div>
      )}
    </header>
  );
}
