export default function RedeCredenciada() {
    const cards = [
        {
            icon: "🏥",
            tag: "Referência estadual",
            title: "Hospital de Base do DF",
            description: "Referência em pneumologia no DF, com ambulatório especializado, internações e tratamento de casos graves de DPOC.",
        },
        {
            icon: "🫁",
            tag: "Hospital regional",
            title: "HRAN — Hospital Regional da Asa Norte",
            description: "Atendimento de urgência e emergência respiratória, além de acompanhamento ambulatorial de doenças crônicas pulmonares.",
        },
        {
            icon: "🎓",
            tag: "Ensino e pesquisa",
            title: "HUB — Hospital Universitário de Brasília",
            description: "Vinculado à UnB, oferece atendimento clínico, pesquisa e ensino em pneumologia. Ambulatório de doenças respiratórias crônicas.",
        },
        {
            icon: "💊",
            tag: "Acesso a medicamentos",
            title: "Farmácia de Alto Custo",
            description: "Distribuição gratuita de medicamentos para DPOC pelo SUS, mediante laudo médico e cadastro nas unidades da SES-DF.",
        },
        {
            icon: "🫀",
            tag: "Reabilitação",
            title: "Reabilitação Pulmonar",
            description: "Programas de reabilitação pulmonar supervisionada disponíveis em hospitais de referência e centros de especialidades do DF.",
        },
        {
            icon: "🩺",
            tag: "Atenção primária",
            title: "UBS do Distrito Federal",
            description: "Porta de entrada do SUS para diagnóstico, acompanhamento, vacinação e referenciamento de pacientes com DPOC em todas as regiões administrativas.",
        },
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-[#f4f9f6]">
            <div className="max-w-6xl w-4/5 mx-auto flex flex-col gap-10 md:gap-12">

                {/* Cabeçalho */}
                <header className="flex flex-col text-center md:text-left items-center md:items-start">
                    <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
                        Distrito Federal
                    </span>
                    <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
                        Rede credenciada no DF
                    </h2>
                    <p className="text-sm md:text-xl leading-relaxed text-grey-900 font-poppins">
                        Pacientes com DPOC no DF podem contar com diversos serviços de saúde para diagnóstico, tratamento
                        e acompanhamento contínuo. As Unidades Básicas de Saúde representam a porta de entrada principal,
                        enquanto hospitais de referência e programas especializados garantem o cuidado integral.
                    </p>
                </header>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="bg-[#EDF9EF] border border-green-400 rounded-xl p-6 flex flex-col justify-start transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#D8F3DC]"
                        >
                            {/* Ícone + Tag */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl md:text-3xl" role="img" aria-hidden="true">
                                    {card.icon}
                                </span>
                                <span className="text-xs font-medium text-green-500 border border-green-400 rounded-full px-3 py-1 font-poppins">
                                    {card.tag}
                                </span>
                            </div>

                            {/* Título */}
                            <h3 className="text-green-500 font-bold text-base md:text-lg mb-2 font-poppins">
                                {card.title}
                            </h3>

                            {/* Descrição */}
                            <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
