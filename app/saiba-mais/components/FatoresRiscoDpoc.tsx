import React from 'react';

const fatoresRiscoData = [
  {
    icon: '🚬',
    title: 'Tabagismo',
    description: 'O uso de cigarros e a inalação da fumaça (fumo passivo) são os principais responsáveis pelo desenvolvimento da doença.',
  },
  {
    icon: '🏭',
    title: 'Exposição ocupacional e ambiental',
    description: 'Inalação constante de gases e poeiras, muito comum na mineração, agricultura, construção civil e indústria têxtil.',
  },
  {
    icon: '🦠',
    title: 'Infecções respiratórias',
    description: 'Ter histórico de infecções respiratórias graves e frequentes durante a infância aumenta a predisposição à doença.',
  },
  {
    icon: '🧬',
    title: 'Deficiência de Alfa-1 Antitripsina',
    description: 'Uma condição genética rara que reduz a proteção natural dos pulmões, deixando-os mais vulneráveis a danos.',
  },
  {
    icon: '👥',
    title: 'Histórico familiar',
    description: 'A presença de parentes próximos com diagnóstico de DPOC sugere uma maior suscetibilidade genética à doença.',
  },
  {
    icon: '🫁',
    title: 'Desenvolvimento pulmonar anormal',
    description: 'Problemas durante a gestação ou nos primeiros anos de vida que impedem os pulmões de atingirem sua capacidade máxima.',
  },
];

export default function FatoresRiscoDpoc() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className=" w-[90%] md:w-4/5 mx-auto flex flex-col gap-10 md:gap-12">
        
        {/* Cabeçalho */}
        <header className="flex flex-col text-center md:text-left items-center md:items-start">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Fique alerta
          </span>
          
          <h2 className="text-green-500 text-4xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
            Fatores de risco
          </h2>
          
          <p className="flex flex-col text-center md:text-left h-full text-base md:text-lg lg:text-xl leading-relaxed gap-4 md:gap-6 text-gray-900 font-poppins">
            Embora o cigarro seja o grande vilão, existem outros fatores importantes que podem desencadear a DPOC.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {fatoresRiscoData.map((item, index) => (
            <article 
              key={index}
              className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC]"
            >
              {/* Ícone */}
              <span aria-hidden="true"
                    className="text-green-500 font-sans text-3xl md:text-4xl font-light mb-4 block">
                {item.icon}
              </span>
              
              {/* Título */}
              <h3 className="text-green-500 text-base md:text-lg mb-2 font-sans flex items-center gap-2">
                {item.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}