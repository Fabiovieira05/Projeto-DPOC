export default function CuidadoIntegral() {
  const cuidadosCards = [
    { icon: "🏠", alt: "Ícone de uma casa", title: "Cuidados domiciliares", text: "Orientações para adaptação do ambiente doméstico, uso de oxigenoterapia em casa e identificação de sinais de agravamento." },
    { icon: "📋", alt: "Ícone de uma prancheta de anotações médicas", title: "Acompanhamento contínuo", text: "Monitoramento de sinais vitais, saturação de oxigênio e avaliação da progressão dos sintomas em cada consulta." },
    { icon: "💉", alt: "Ícone de uma seringa de vacina", title: "Vacinação", text: "Incentivar e administrar vacinas contra influenza, pneumococo e COVID-19 para prevenir infecções respiratórias." },
    { icon: "❤️", alt: "Ícone de um coração vermelho", title: "Apoio emocional", text: "Acolhimento empático, escuta ativa e encaminhamento para suporte psicológico quando necessário." },
    { icon: "🩺", alt: "Ícone de um estetoscópio", title: "Educação em saúde", text: "Orientar pacientes e familiares sobre a doença, sintomas de alerta, uso de medicamentos e hábitos saudáveis." },
    { icon: "🚭", alt: "Ícone de placa de proibido fumar", title: "Cessação do tabagismo", text: "Apoio ativo ao abandono do cigarro, com encaminhamento a programas de cessação e grupos de apoio." },
    { icon: "💊", alt: "Ícone de uma pílula de remédio", title: "Orientação sobre inaladores", text: "Ensinar e verificar a técnica inalatória correta para garantir a eficácia do tratamento." },
    { icon: "🧘", alt: "Ícone de uma pessoa praticando meditação ou técnica de respiração", title: "Técnicas respiratórias", text: "Ensinar respiração diafragmática, expiração com lábios franzidos e posicionamento para reduzir a dispneia." },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto w-full max-w-7xl px-6 py-16 gap-10 md:gap-12">
        <header className="flex flex-col text-center md:text-left items-center md:items-start w-full">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Cuidado integral
          </span>
          <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans leading-tight w-full">
            Cuidados de Enfermagem e promoção da saúde
          </h2>

          <div className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins w-full">
            <p>A enfermagem possui papel fundamental na prevenção, orientação e acompanhamento de pacientes com DPOC. Os profissionais atuam diretamente na educação em saúde, incentivo ao autocuidado, orientação sobre o uso correto de medicamentos, prevenção de complicações e fortalecimento da adesão ao tratamento.</p>
            <p>Além disso, o suporte emocional e a orientação familiar ajudam na melhora da qualidade de vida e no enfrentamento das limitações causadas pela doença.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cuidadosCards.map((card, index) => (
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