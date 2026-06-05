import React from 'react';

// Array de dados estáticos extraídos da imagem
const statsData = [
  {
    value: '3º',
    description: 'maior causa de morte\ndo mundo',
  },
  {
    value: '+300M',
    description: 'de pessoas afetadas',
  },
  {
    value: '70%',
    description: 'vinculados ao\ntabagismo',
  },
];

export default function StatsBanner() {
  return (
    <section className="w-full stats-banner-bg py-12 md:py-16">
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">        {statsData.map((stat, index) => (
        <article
          key={index}
          className={`flex flex-col items-center sm:items-start text-center sm:text-left ${index === 0 ? 'sm:justify-self-start' :
            index === 1 ? 'sm:justify-self-center' :
              'sm:justify-self-end'
            }`}
          aria-label={`${stat.value} ${stat.description.replace('\n', ' ')}`}
        >

          <span
            aria-hidden="true"
            className="text-green-500 font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-1 md:mb-2 tracking-wide"
          >
            {stat.value}
          </span>

          <p
            aria-hidden="true"
            className="text-gray-800 font-poppins text-xs sm:text-sm md:text-base font-medium leading-relaxed whitespace-pre-line"
          >
            {stat.description}
          </p>
        </article>
      ))}

      </div>
    </section>
  );
}