export default function BemEstarIntegral() {
  const praticasCards = [
    { icon: "🌿", title: "Reiki", text: "Prática de canalização de energia que promove relaxamento e equilíbrio físico e emocional." },
    { icon: "☯️", title: "Tai Chi Chuan", text: "Exercícios de baixo impacto que melhoram equilíbrio, resistência e capacidade respiratória." },
    { icon: "👂", title: "Auriculoterapia", text: "Estimulação de pontos na orelha que pode contribuir para o controle da ansiedade e alívio de sintomas." },
    { icon: "🧘‍♂️", title: "Yoga", text: "Combina posturas, respiração e meditação, auxiliando no controle da dispneia e reduz o estresse." },
    { icon: "🪷", title: "Meditação", text: "Reduz ansiedade e melhora o manejo emocional das limitações causadas pela doença." },
    { icon: "🪡", title: "Acupuntura", text: "Pode aliviar sintomas como dispneia e fadiga por meio da estimulação de pontos energéticos." },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="w-full text-left mb-10">
          <p className="text-sm font-semibold text-dpoc-green">
            Bem-estar integral
          </p>
          <h2 className="hero-title mt-2 text-3xl md:text-4xl text-[#326750] leading-tight max-w-4xl">
            Práticas Integrativas relacionadas à DPOC
          </h2>
          
          <div className="mt-6 flex flex-col gap-4 text-zinc-700 text-sm md:text-base max-w-4xl">
            <p>As práticas integrativas e complementares podem auxiliar no bem-estar físico e emocional de pacientes com DPOC, contribuindo para o relaxamento, redução da ansiedade e melhora da qualidade de vida.</p>
            <p>Embora não substituam o tratamento convencional, essas práticas podem atuar de forma complementar no controle dos sintomas e no fortalecimento emocional dos pacientes. O SUS oferta diversas PICs por meio da Política Nacional de Práticas Integrativas e Complementares (PNPIC).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {praticasCards.map((card, index) => (
            <div key={index} className="bg-white border border-[#326750] rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <span className="text-3xl mb-4" aria-hidden="true">{card.icon}</span>
              <h3 className="font-bold text-[#326750] mb-3 leading-snug">{card.title}</h3>
              <p className="text-sm md:text-base text-zinc-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}