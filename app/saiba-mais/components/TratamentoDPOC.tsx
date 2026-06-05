import React from 'react';
const treatmentData = [
  {
    icon: '💊',
    title: 'Uso de medicamentos',
    description: 'Os inaladores ("bombinhas") dilatam as vias respiratórias e facilitam a passagem do ar. O uso correto desses dispositivos é essencial para a eficácia do tratamento.',
  },
  {
    icon: '🏋️',
    title: 'Reabilitação pulmonar',
    description: 'Exercícios supervisionados e técnicas respiratórias que auxiliam na melhora da capacidade pulmonar, resistência física e qualidade de vida.',
  },
  {
    icon: '🩺',
    title: 'Monitoramento contínuo',
    description: 'Consultas regulares, exames de função pulmonar e acompanhamento médico ajudam a identificar agravamentos precoces e prevenir complicações.',
  },
  {
    icon: '🧠',
    title: 'Saúde mental e apoio emocional',
    description: 'Ansiedade e depressão podem estar presentes. O suporte psicológico e familiar fortalece a adesão ao tratamento e melhora o bem-estar emocional.',
  },
];

interface TreatmentCardProps {
  stepNumber: number;
  icon: string;
  title: string;
  description: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ stepNumber, icon, title, description }) => {
  return (
    <article
      className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC]"
    >
      {/* Número Grande (Step) */}
      <span
        aria-hidden="true"
        className="text-green-500 font-sans text-3xl md:text-4xl font-light mb-4 block"
      >
        {stepNumber}
      </span>

      {/* Título com Ícone embutido (inline) */}
      <h3 className="text-green-500 font-bold text-base md:text-lg mb-2 font-poppins flex items-center gap-2">
        <span aria-hidden="true" className="text-lg md:text-xl">{icon}</span>
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default function TreatmentSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f9f6]">
      <div className="flex flex-col mx-auto w-full max-w-7xl px-6 gap-10 md:gap-12">

        {/* Cabeçalho */}
        <header className="flex flex-col text-center md:text-left items-center md:items-start">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Cuide da sua saúde
          </span>
          <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
            Tratamento e acompanhamento
          </h2>
          <p className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins">
            O tratamento da DPOC tem como objetivo aliviar sintomas, melhorar a respiração, reduzir crises e proporcionar mais qualidade de vida. O acompanhamento contínuo é essencial para monitorar a evolução da doença.
          </p>
        </header>

        {/* Grid de Cards: 1 coluna no celular, 2 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {treatmentData.map((item, index) => (
            <TreatmentCard
              key={index}
              stepNumber={index + 1}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}