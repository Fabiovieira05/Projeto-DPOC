import React from 'react';
import { introCardsData } from '../../../data/introCardsData';


export default function IntroducaoDpoc() {
  return (
    <section className="flex items-center mx-auto pt-24 pb-16" aria-labelledby="intro-title">
      <div className="flex-col mx-auto w-full max-w-7xl px-6 gap-8">

        <div className="space-y-6 text-gray-800">
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
              Entenda a doença
            </span>
            <h2 id="intro-title" className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8 font-sans">
              Introdução
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-stretch">
          <div className="flex flex-col text-center md:text-left h-full text-base md:text-lg lg:text-xl leading-relaxed gap-4 md:gap-6 text-gray-900 font-poppins">
            <p>
              A DPOC é uma doença respiratória progressiva que dificulta a passagem do ar pelos pulmões, causando limitação respiratória e comprometendo atividades do dia a dia.
            </p>
            <p>
              Relacionada principalmente ao tabagismo, também pode surgir devido à exposição contínua à fumaça, poeiras e poluição. Fatores genéticos também contribuem para seu desenvolvimento.
            </p>
            <p>
              Embora não tenha cura, o diagnóstico precoce e o tratamento adequado melhoram significativamente a qualidade de vida.
            </p>
          </div>


          {/* Coluna da Direita: Bloco de Cards */}
          <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0">
              {introCardsData.map((card, index) => (
                <div key={index} className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC] ">
                  <span
                    role="img"
                    aria-label={card.ariaLabel}
                    className="text-3xl mb-4 block"
                  >
                    {card.icon}
                  </span>
                  <h3 className="text-green-500 text-base mb-2 font-sans">{card.title}</h3>
                  <p className="text-sm leading-normal font-poppins">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}