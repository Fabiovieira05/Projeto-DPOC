export default function BemEstarIntegral() {
  const praticasCards = [
    { icon: "🌿", alt: "Ícone de uma folha verde indicando natureza ou fitoterapia", title: "Reiki", text: "Prática de canalização de energia que promove relaxamento e equilíbrio físico e emocional." },
    { icon: "☯️", alt: "Ícone do símbolo Yin Yang de equilíbrio", title: "Tai Chi Chuan", text: "Exercícios de baixo impacto que melhoram equilíbrio, resistência e capacidade respiratória." },
    { icon: "👂", alt: "Ícone de uma orelha, representando a auriculoterapia", title: "Auriculoterapia", text: "Estimulação de pontos na orelha que pode contribuir para o controle da ansiedade e alívio de sintomas." },
    { icon: "🧘‍♂️", alt: "Ícone de um homem praticando Yoga", title: "Yoga", text: "Combina posturas, respiração e meditação, auxiliando no controle da dispneia e reduz o estresse." },
    { icon: "🪷", alt: "Ícone de uma flor de lótus aberta", title: "Meditação", text: "Reduz ansiedade e melhora o manejo emocional das limitações causadas pela doença." },
    { icon: "🪡", alt: "Ícone de uma agulha, representando acupuntura", title: "Acupuntura", text: "Pode aliviar sintomas como dispneia e fadiga por meio da estimulação de pontos energéticos." },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto w-full max-w-7xl px-6 py-16 gap-10 md:gap-12">
        <header className="flex flex-col text-center md:text-left items-center md:items-start w-full">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Bem-estar integral
          </span>
          <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans leading-tight w-full">
            Práticas Integrativas relacionadas à DPOC
          </h2>

          <div className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins w-full">
            <p>As práticas integrativas e complementares podem auxiliar no bem-estar físico e emocional de pacientes com DPOC, contribuindo para o relaxamento, redução da ansiedade e melhora da qualidade de vida.</p>
            <p>Embora não substituam o tratamento convencional, essas práticas podem atuar de forma complementar no controle dos sintomas e no fortalecimento emocional dos pacientes. O SUS oferta diversas PICs por meio da Política Nacional de Práticas Integrativas e Complementares (PNPIC).</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {praticasCards.map((card, index) => (
            <div key={index} className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC]">
              <span className="text-3xl mb-4" role="img" aria-label={card.alt}>{card.icon}</span>
              <h3 className="font-bold text-[#326750] mb-3 leading-snug">{card.title}</h3>
              <p className="text-sm text-zinc-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}