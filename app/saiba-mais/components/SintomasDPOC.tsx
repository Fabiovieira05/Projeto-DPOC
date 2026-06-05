import React from 'react';

// 1. Array de dados estáticos extraídos da imagem
const sintomasData = [
  {
    icon: '😮‍💨',
    title: 'Falta de ar',
    description: 'Dificuldade respiratória durante esforços ou até em repouso',
  },
  {
    icon: '🤧',
    title: 'Tosse crônica',
    description: 'Tosse persistente que pode durar meses ou anos',
  },
  {
    icon: '🫁',
    title: 'Chiado no peito',
    description: 'Sibilância causada pela obstrução das vias respiratórias',
  },
  {
    icon: '💤',
    title: 'Cansaço excessivo',
    description: 'Fadiga frequente devido ao esforço para respirar',
  },
  {
    icon: '🧪',
    title: 'Produção de secreção',
    description: 'Aumento de muco e catarro nas vias respiratórias',
  },
  {
    icon: '⚠️',
    title: 'Aperto no tórax',
    description: 'Sensação de pressão ou desconforto no peito',
  },
];

export default function SintomasDpoc() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f9f6]">
      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col text-center md:text-left items-center md:items-start">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Reconheça os sinais
          </span>

          <h2 className="text-green-500 text-4xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
            Principais sintomas
          </h2>

          {/* lg:ml-auto empurra o parágrafo (que tem tamanho máximo) para encostar na direita */}
          <p className="flex flex-col text-center md:text-left h-full text-base md:text-lg lg:text-xl leading-relaxed gap-4 md:gap-6 text-gray-900 font-poppins">
            Os sintomas da DPOC costumam surgir gradualmente e podem se intensificar com o tempo. Reconhecê-los precocemente é fundamental para iniciar o tratamento adequado e evitar complicações.
          </p>
        </div>

        <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-135">
            {sintomasData.map((sintoma, index) => (
              <article
                key={index}
                className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC] "
                aria-label={`Sintoma: ${sintoma.title}. ${sintoma.description}`}
              >
                <span aria-hidden="true" className="text-2xl mb-3 block">
                  {sintoma.icon}
                </span>

                <h3 className="text-green-500 font-bold text-base mb-1 font-sans">
                  {sintoma.title}
                </h3>

                <p className="text-gray-800/90 text-sm leading-tight font-poppins">
                  {sintoma.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}