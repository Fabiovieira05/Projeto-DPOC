"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/saiba-mais", label: "Saiba mais" },
    { href: "/sobre-nos", label: "Sobre nós" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>

            <header className="bg-green-400 text-white w-full shadow-md font-poppins relative">
                <nav
                    className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between"
                    aria-label="Navegação principal"
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-[30px] tracking-wider focus:outline-none focus:ring-2 focus:ring-white rounded px-2 -ml-2 z-50"
                        aria-label="Ir para a página inicial"
                    >
                        <span className="font-science-gothic">D</span>
                        <span className="text-green-800 font-science-gothic tracking-widest">POC</span>
                    </Link>

                    {/* Links de Navegação Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xl hover:text-green-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Ícone Dark Mode (placeholder) */}
                        <button
                            aria-label="Alternar tema"
                            className="p-2 hover:bg-green-500/40 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </button>

                        {/* Botão VLibras */}
                        <button className="bg-green-500 hover:bg-green-800 text-white px-5 py-2 rounded-[5px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white text-sm text-xl">
                            VLibras
                        </button>
                    </div>

                    {/* Botão Hambúrguer Mobile */}
                    <button
                        className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-white rounded z-50"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Overlay escuro */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleMenu}
                aria-hidden="true"
            />

            {/* Drawer lateral direito */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className={`fixed top-0 right-0 h-full w-[55%] max-w-xs bg-green-400 text-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Botão fechar no topo do drawer */}
                <div className="flex justify-end p-5">
                    <button
                        onClick={toggleMenu}
                        aria-label="Fechar menu"
                        className="p-2 hover:bg-green-500/40 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Links de navegação */}
                <nav className="flex flex-col gap-2 px-8 font-poppins" aria-label="Navegação mobile">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xl py-3 hover:text-green-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2"
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Ícone de tema */}
                    <button
                        aria-label="Alternar tema"
                        className="w-fit p-3 mt-2 hover:bg-green-500/40 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </button>

                    {/* Botão VLibras */}
                    <button
                        className="bg-green-500 hover:bg-green-800 text-white w-fit px-6 py-2.5 rounded-[5px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white mt-2 text-xl"
                        onClick={toggleMenu}
                    >
                        VLibras
                    </button>
                </nav>
            </div>
        </>
    );
}
