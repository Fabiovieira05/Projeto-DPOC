import React from 'react';

const diagnosisData = [
  {
    icon: '🩺', 
    title: 'Anamnese e histórico clínico',
    description: 'Avaliação de sintomas, tempo de tabagismo, exposições ocupacionais e histórico familiar de doenças respiratórias.',
  },
  {
    icon: '🫁',
    title: 'Espirometria',
    description: 'Exame que mede o volume e o fluxo de ar pulmonar. A relação VEF1/CVF abaixo de 0,70 confirma obstrução persistente.',
  },
  {
    icon: '🔬',
    title: 'Exames complementares',
    description: 'Radiografia e TC de tórax, gasometria arterial, oximetria e hemograma para avaliar complicações e comorbidades.',
  },
  {
    icon: '📊',
    title: 'Classificação GOLD',
    description: 'Estadiamento de I (leve) a IV (muito grave) com base no VEF1, sintomas e frequência de exacerbações.',
  },
];

interface DiagnosisListItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DiagnosisListItem: React.FC<DiagnosisListItemProps> = ({ title, description, icon }) => {
  return (
    <li className="flex items-start gap-4 md:gap-6">
    
      <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-green-100 border border-green-800 text-2xl shadow-sm">
        <span aria-hidden="true">{icon}</span>
      </div>
      <div className="flex flex-col pt-1">
        <h3 className="text-green-500 font-bold font-poppins text-base md:text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

    </li>
  );
};

export default function DiagnosticoDpoc() {
  return (
    <section className="w-full py-8 md:py-24 bg-[#f4f9f6]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-12">
        
        <header className="flex flex-col text-left">
          <span className="font-poppins text-green-400 font-medium text-2xl text-medium">
            Como é feito
          </span>
          <h2 className="text-green-500 text-5xl md:text-4xl lg:text-5xl tracking-wide mb-8 font-sans">
            Diagnóstico
          </h2>
          
          <div className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins">
            <p>
              O diagnóstico da DPOC é clínico e funcional. Além da avaliação dos sintomas e do histórico de exposição a fatores de risco, o exame de espirometria é o padrão-ouro para confirmar a obstrução ao fluxo aéreo e classificar a gravidade da doença.
            </p>
            <p>
              A classificação GOLD (Global Initiative for Chronic Obstructive Lung Disease) divide a DPOC em estágios de I a IV, do leve ao muito grave, orientando decisões terapêuticas e o nível de cuidado necessário.
            </p>
          </div>
        </header>

        <ul className="flex flex-col gap-6 md:gap-8">
          {diagnosisData.map((item, index) => (
            <DiagnosisListItem 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
            />
          ))}
        </ul>

      </div>
    </section>
  );
}