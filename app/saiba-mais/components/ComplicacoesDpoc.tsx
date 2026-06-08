import React from 'react';

const complicacoesData = [
  {
    icon: '🦠',
    title: 'Pneumonias',
    description: 'Pacientes com DPOC têm maior risco de infecções respiratórias devido ao comprometimento da função pulmonar.',
  },
  {
    icon: '😮‍💨',
    title: 'Insuficiência respiratória aguda',
    description: 'Ocorre quando os pulmões não conseguem realizar adequadamente as trocas gasosas, causando diminuição do oxigênio (hipoxemia), aumento do gás carbônico (hipercapnia) e acidose respiratória.',
  },
  {
    icon: '⚠️',
    title: 'Pneumotórax',
    description: 'Acontece quando há entrada de ar na cavidade pleural, levando ao colapso parcial ou total do pulmão e agravando a dificuldade respiratória.',
  },
  {
    icon: '🚬',
    title: 'Câncer de pulmão e de bexiga',
    description: 'O tabagismo, principal fator de risco para DPOC, também aumenta o risco desses tipos de câncer.',
  },
  {
    icon: '📈',
    title: 'Hipertensão pulmonar',
    description: 'Caracteriza-se pelo aumento da pressão nos vasos sanguíneos dos pulmões, dificultando a circulação sanguínea.',
  },
  {
    icon: '❤️',
    title: 'Cor pulmonale crônico',
    description: 'É uma insuficiência cardíaca direita causada pelo aumento da pressão pulmonar, levando o coração a trabalhar mais para bombear sangue aos pulmões.',
  },
];


interface ComplicacaoListItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ComplicacaoListItem: React.FC<ComplicacaoListItemProps> = ({ title, description, icon }) => {
  return (
    <li className="flex items-start gap-4 md:gap-6">
      
      {/* Círculo do ícone idêntico ao do Diagnóstico (shrink-0 impede que ele amasse) */}
      <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-green-100 border border-green-800 text-2xl shadow-sm">
        <span aria-hidden="true">{icon}</span>
      </div>
      
      {/* Container de texto alinhado verticalmente */}
      <div className="flex flex-col pt-1 text-left">
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


export default function ComplicacoesDpoc() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className=" w-[90%] md:w-4/5 mx-auto flex flex-col gap-8 md:gap-12">
        
        {/* Cabeçalho: Centralizado no celular, alinhado à esquerda no desktop */}
        <header className="flex flex-col text-center md:text-left items-center md:items-start">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Fique atento aos riscos
          </span>
          <h2 className="text-green-500 text-4xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
            Principais complicações
          </h2>
        </header>

        {/* Lista de Complicações estruturada com a tag <ul> */}
        <ul className="flex flex-col gap-6 md:gap-8 mt-4 md:mt-0">
          {complicacoesData.map((item, index) => (
            <ComplicacaoListItem 
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