import React from 'react';
import { introCardsData } from '../../../data/introCardsData';
import styles from './IntroducaoDpoc.module.css';

export default function IntroducaoDpoc() {
  return (
    <section className="min-h-screen bg-green-100 flex items-center font-sans mx-auto">
      <div className="flex-col w-4/5 max-w-6xl mx-auto gap-8">
        
        <div className="space-y-6 text-gray-800">
          <div>
            <span className="font-poppins text-green-400">
              Entenda a doença
            </span>
            <h2 className= "text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8 font-sans">
              Introdução
            </h2>
          </div>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-stretch">
            <div className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins">
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
            <div className=" w-full flex lg:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {introCardsData.map((card, index) => (
                  <div key={index} className="bg-green-100 border-2 rounded-xl p-6 flex flex-col justify-start transition-shadow hover:shadow-sm border-green-500 bg-green-200">
                    <span 
                      role="img" 
                      aria-label={card.ariaLabel} 
                      className="text-3xl mb-4 block"
                    >
                      {card.icon}
                    </span>
                    <h3 className="text-green-500 font-bold text-base mb-2 font-sans">{card.title}</h3>
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