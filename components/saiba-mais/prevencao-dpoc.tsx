import React from 'react';

const prevencaoData = [
    {
        icon: '🚬',
        alt: 'Ícone de cigarro, representando cessação do tabagismo',
        title: 'Pare de fumar',
        description: 'A interrupção do tabagismo é a medida mais importante para prevenir a DPOC.',
    },
    {
        icon: '🏭',
        alt: 'Ícone de fábrica com fumaça, representando poluentes ambientais',
        title: 'Evite poluentes',
        description: 'Reduza a exposição à fumaça, poeiras, produtos tóxicos e poluição do ar.',
    },
    {
        icon: '💉',
        alt: 'Ícone de seringa representando vacinação',
        title: 'Vacine-se',
        description: 'Vacinas ajudam a prevenir infecções respiratórias graves.',
    },
    {
        icon: '🏃',
        alt: 'Ícone de pessoa correndo, representando exercício físico',
        title: 'Pratique exercícios',
        description: 'A atividade física fortalece o sistema respiratório e melhora a qualidade de vida.',
    },
    {
        icon: '🥗',
        alt: 'Ícone de salada, representando alimentação saudável',
        title: 'Hábitos saudáveis',
        description: 'Uma alimentação equilibrada ajuda na manutenção da saúde pulmonar.',
    },
    {
        icon: '🩺',
        alt: 'Ícone de estetoscópio, representando acompanhamento médico',
        title: 'Acompanhamento médico',
        description: 'Consultas regulares ajudam na identificação precoce da doença.',
    },
    // {
    //     icon: '🧬',
    //     alt: 'Ícone de DNA, representando investigação genética',
    //     title: 'Investigação de Alfa-1 Antitripsina',
    //     description: 'Por ser uma condição genética, a prevenção foca no rastreamento precoce por exames de sangue e em evitar absolutamente o cigarro para proteger a função pulmonar.',
    // },
    // {
    // icon: '👨‍👩‍👧‍👦',
    // title: 'Atenção ao histórico familiar',
    // description: 'Pessoas com parentes diagnosticados com DPOC devem ter cuidado redobrado, evitando exposições a poluentes e realizando exames preventivos regulares, como a espirometria.',
    // alt: 'Ícone de família, representando histórico familiar',
    // },
    // {
    // icon: '👶',
    // alt: 'Ícone de bebê, representando infância',
    // title: 'Cuidados na gestação e infância',
    // description: 'A prevenção começa cedo: evitar o fumo durante a gravidez, manter a vacinação em dia e prevenir infecções respiratórias graves garantem o pleno desenvolvimento dos pulmões.',
    // },
];

interface PreventionCardProps {
    stepNumber: number;
    icon: string;
    alt: string;
    title: string;
    description: string;
}

const PreventionCard: React.FC<PreventionCardProps> = ({ stepNumber, icon, alt, title, description }) => {
    return (
        <article
            className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC]"
        >
            {/* Número Grande */}
            <span
                aria-hidden="true"
                className="text-green-500 font-sans text-3xl md:text-4xl font-light mb-4 block"
            >
                {stepNumber}
            </span>

            {/* Título com ícone */}
            <h3 className="text-green-500 text-base md:text-lg mb-2 font-sans flex items-center gap-2">
                <span aria-hidden="true" role="img" aria-label={alt} className="text-lg md:text-xl">{icon}</span>
                {title}
            </h3>

            {/* Descrição */}
            <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </article>
    );
};

export default function PrevencaoDpoc() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#f4f9f6]">
            <div className="flex flex-col mx-auto w-full max-w-7xl px-6 gap-10 md:gap-12">

                {/* Cabeçalho */}
                <header className="flex flex-col text-center md:text-left items-center md:items-start">
                    <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
                        Proteja-se
                    </span>
                    <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
                        Como prevenir a DPOC?
                    </h2>
                    <p className="text-sm md:text-xl leading-relaxed text-grey-900 font-poppins">
                        A prevenção está diretamente relacionada à redução da exposição aos fatores de risco. Adotar hábitos
                        saudáveis e o diagnóstico precoce contribuem para reduzir os impactos da doença.
                    </p>
                </header>

                {/* Grid de Cards: 1 coluna no celular, 2 no tablet, 3 no desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {prevencaoData.map((item, index) => (
                        <PreventionCard
                            key={index}
                            stepNumber={index + 1}
                            icon={item.icon}
                            alt={item.alt}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
