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
    /* w-full preenche a tela toda. 
      bg-[#EEF3EF] é uma aproximação visual do tom cinza/esverdeado do design. 
    */
    <section className="w-full bg-[#EAF0ED] py-12 md:py-16">
      
     
      <div className="max-w-6xl w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        
        {statsData.map((stat, index) => (
          <article 
            key={index} 
            className={`flex flex-col items-start text-left ${
              index === 0 ? 'md:justify-self-start' : 
              index === 1 ? 'md:justify-self-center' : 
              'md:justify-self-end'
            }`}
            aria-label={`${stat.value} ${stat.description.replace('\n', ' ')}`}
          >
            
            <span 
              aria-hidden="true" 
              className="text-green-500 font-sans text-5xl md:text-6xl mb-2 tracking-wide"
            >
              {stat.value}
            </span>
            
            <p 
              aria-hidden="true" 
              className="text-gray-800 font-poppins text-sm md:text-base font-medium leading-snug whitespace-pre-line"
            >
              {stat.description}
            </p>
          </article>
        ))}

      </div>
    </section>
  );
}