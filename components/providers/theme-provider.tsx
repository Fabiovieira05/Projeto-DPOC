"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { },
});

export function useTheme() {
    return useContext(ThemeContext);
}

/**
 * Lê o tema salvo ou a preferência do sistema.
 * Chamado apenas no lado do cliente (dentro de useEffect).
 */
function resolveTheme(): Theme {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("dpoc-theme") as Theme | null;
    if (saved) return saved;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const initialized = useRef(false);

    // Primeiro efeito: lê a preferência e aplica de uma vez.
    // Usa setTheme com callback (updater function) — não é chamada síncrona direta.
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const resolved = resolveTheme();
        const root = document.documentElement;

        if (resolved === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        setTheme(() => resolved);
    }, []);

    // Segundo efeito: sincroniza DOM + localStorage quando o tema muda via toggle
    useEffect(() => {
        if (!initialized.current) return;
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("dpoc-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
