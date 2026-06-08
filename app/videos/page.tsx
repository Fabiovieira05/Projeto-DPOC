import React from "react";

export default function VideosPage() {
    return (
        <main id="main-content" className="min-h-screen bg-background py-16 px-6">
            <section className="max-w-7xl mx-auto" aria-labelledby="gallery-title">
                {/* Título Centralizado */}
                <div className="text-center mb-16">
                    <h1 id="gallery-title" className="text-4xl md:text-5xl font-bold text-accent mb-4">
                        Galeria de Vídeos
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Explore conteúdos informativos e educativos sobre saúde pulmonar, diagnósticos e documentários relevantes.
                    </p>
                </div>

                {/* Grid Responsivo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">

                    {/* Card de Destaque: Big Vape */}
                    <article
                        className="flex flex-col bg-zinc-900 text-white rounded-2xl overflow-hidden shadow-xl border border-zinc-800 transition-transform hover:scale-[1.01] focus-within:ring-2 focus-within:ring-green-500"
                        aria-labelledby="card-title-bigvape"
                        role="listitem"
                    >
                        <div className="p-8 flex flex-col h-full justify-between">
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-red-600 text-[10px] font-bold uppercase tracking-wider mb-4" aria-label="Categoria: Documentário Netflix">
                                    Documentário Netflix
                                </div>
                                <h2 id="card-title-bigvape" className="text-3xl font-bold mb-4">Big Vape</h2>
                                <p className="text-zinc-400 mb-6 leading-relaxed">
                                    Esta série documental acompanha a ascensão meteórica da Juul, uma empresa de cigarros eletrônicos que passou de uma startup promissora a um gigante multimilionário, desencadeando uma epidemia entre jovens.
                                </p>
                            </div>
                            <a
                                href="https://www.netflix.com/title/81444184"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors w-full md:w-fit outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                            >
                                Assistir na Netflix
                                <span className="sr-only">(abre em uma nova aba)</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                        </div>
                    </article>

                    {/* Vídeo: Espirometria */}
                    <article
                        className="flex flex-col bg-surface-card rounded-2xl overflow-hidden shadow-lg border border-border-default transition-transform hover:scale-[1.01] focus-within:ring-2 focus-within:ring-green-500"
                        aria-labelledby="card-title-espirometria"
                        role="listitem"
                    >
                        <div className="aspect-video w-full bg-black relative">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/sFdFPx8ZNAo"
                                title="Vídeo Tutorial: Entendendo a Espirometria"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="p-6">
                            <h2 id="card-title-espirometria" className="text-xl font-bold text-accent mb-2">Entendendo a Espirometria</h2>
                            <p className="text-secondary text-sm">
                                Aprenda como funciona este exame fundamental para o diagnóstico e monitoramento da saúde pulmonar.
                            </p>
                        </div>
                    </article>

                    {/* Vídeo: Caso Clínico (Local) */}
                    <article
                        className="flex flex-col bg-surface-card rounded-2xl overflow-hidden shadow-lg border border-border-default transition-transform hover:scale-[1.01] focus-within:ring-2 focus-within:ring-green-500"
                        aria-labelledby="card-title-casoclinico"
                        role="listitem"
                    >
                        <div className="aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                            <video
                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                controls
                                preload="metadata"
                                aria-label="Vídeo de discussão de Caso Clínico"
                            >
                                <source src="/video.mp4" type="video/mp4" />
                                Seu navegador não suporta a exibição de vídeos. Por favor, tente em outro navegador.
                            </video>
                        </div>
                        <div className="p-6">
                            <h2 id="card-title-casoclinico" className="text-xl font-bold text-accent mb-2">Caso Clínico</h2>
                            <p className="text-secondary text-sm">
                                Discussão de caso real para aprofundamento nos sintomas e tratamentos discutidos.
                            </p>
                        </div>
                    </article>

                </div>
            </section>
        </main>
    );
}
