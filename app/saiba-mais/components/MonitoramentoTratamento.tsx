import Accordion from "../../components/Accordion";

export default function MonitoramentoTratamento() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#f4f9f5]">
            <div className="flex flex-col mx-auto w-full max-w-7xl px-6 gap-10 md:gap-12">
                <header className="flex flex-col text-center md:text-left items-center md:items-start">
                    <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
                        Cuide da sua saúde
                    </span>
                    <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
                        Monitoramento e adesão ao tratamento
                    </h2>
                    <p className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins">
                        O acompanhamento contínuo do paciente com DPOC é fundamental para controlar a evolução da
                        doença e prevenir complicações. Consultas médicas regulares, exames de função pulmonar e avaliação
                        dos sintomas ajudam no ajuste do tratamento e na identificação precoce de agravamentos.
                    </p>
                </header>

                <div className="w-full">
                    <Accordion
                        items={[
                            {
                                title: "🗒️ Por que a adesão ao tratamento é tão importante?",
                                content: "A adesão correta ao tratamento é essencial para melhorar a qualidade de vida e reduzir crises respiratórias. Dificuldades financeiras, uso inadequado de inaladores e fatores emocionais podem interferir negativamente nesse processo, aumentando o risco de exacerbações e hospitalizações.",
                            },
                            {
                                title: "🫁 O que é espirometria e por que realizá-la regularmente?",
                                content: "A espirometria mede a capacidade e o fluxo de ar nos pulmões. Realizá-la periodicamente permite acompanhar a progressão da doença, ajustar a terapia e detectar pioras antes que se tornem graves. É o principal exame de monitoramento da DPOC.",
                            },
                            {
                                title: "🫒 Como usar corretamente os inaladores?",
                                content: "O uso incorreto dos dispositivos inalatórios é uma das principais causas de falha no tratamento. O paciente deve ser orientado sobre a técnica correta: agitar o dispositivo, expirar antes de inalar, manter o dispositivo na posição adequada e aguardar o tempo correto entre doses. A enfermagem tem papel central nessa educação.",
                            },
                            {
                                title: "📱 Como a tecnologia pode te ajudar no tratamento?",
                                content: "Aplicativos de saúde, oxímetros portáteis e teleconsultas permitem monitorar saturação de oxigênio, frequência respiratória e sintomas à distância. A tecnologia amplia o acesso ao cuidado e facilita a comunicação entre paciente e equipe de saúde, especialmente em regiões com menor acesso a serviços especializados.",
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
