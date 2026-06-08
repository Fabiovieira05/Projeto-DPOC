import React from "react";

export default function ImpactBanner() {
    return (
        <section
            className="stats-banner-bg py-16 px-6"
            aria-label="Citação de Impacto"
        >
            <div className="max-w-7xl mx-auto text-center">
                <blockquote className="text-green-500 text-2xl md:text-4xl  leading-relaxed font-sans">
                    "Quando o ar falta, percebemos o valor de cada respiração. Previna a DPOC, preserve a vida."
                </blockquote>
            </div>
        </section>
    );
}
