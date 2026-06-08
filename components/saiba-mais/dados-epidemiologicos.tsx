import Accordion from "@/components/common/accordion";

export default function DadosEpidemiologicos() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#f4f9f5]">
            <div className="flex flex-col mx-auto w-full max-w-7xl px-6 gap-10 md:gap-12">
                
                {/* Cabeçalho alinhado ao padrão da seção anterior */}
                <header className="flex flex-col text-center md:text-left items-center md:items-start">
                    <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
                        Panorama e Desafios
                    </span>
                    <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
                        Dados epidemiológicos e obstáculos
                    </h2>
                    <p className="flex flex-col h-full text-base md:text-xl leading-relaxed gap-6 text-gray-800 font-poppins max-w-4xl">
                        Compreender o impacto global e nacional da DPOC é o primeiro passo para enfrentarmos as barreiras do diagnóstico. A alta prevalência da doença e a falta de detecção precoce ainda representam grandes desafios para a saúde pública.
                    </p>
                </header>

                {/* Lista Sanfona (Accordion) com os dados do Artur */}
                <div className="w-full">
                    <Accordion
                        items={[
                            {
                                title: "🌍 Qual o impacto da DPOC no mundo?",
                                content: "A doença ocupa o posto de terceira causa de morte no mundo segundo a Organização Mundial de Saúde (OMS). Apenas em 2019, foram registrados 3,23 milhões de óbitos, sendo que 80% desses casos ocorrem em países de baixa e média renda.",
                            },
                            {
                                title: "🇧🇷 Como é o cenário da morbimortalidade no Brasil?",
                                content: "No cenário brasileiro, a morbimortalidade pela patologia permanece alarmante. Ela se posiciona como a quinta causa de morte em todas as idades e também representa a quinta maior causa de internação no Sistema Único de Saúde (SUS).",
                            },
                            {
                                title: "⚠️ Quais são os principais obstáculos para o controle?",
                                content: "Um obstáculo crítico para o controle da enfermidade no Brasil é a elevada subnotificação. A persistência desse cenário de subdiagnóstico impede que milhares de pacientes recebam o tratamento adequado a tempo.",
                            },
                            {
                                title: "🩺 Como melhorar a detecção e prevenir a mortalidade?",
                                content: "A alta prevalência da doença e a sazonalidade da mortalidade ratificam a necessidade urgente de ampliar o uso da espirometria. Somente com a popularização e o acesso a esse exame poderemos melhorar a detecção precoce e frear o avanço da DPOC.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}