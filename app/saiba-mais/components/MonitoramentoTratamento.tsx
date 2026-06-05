import Accordion from "../../components/Accordion";

export default function MonitoramentoTratamento() {
    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-7xl px-6 py-16">
                <div className="w-full text-left">
                    <p className="text-sm font-semibold text-dpoc-green">
                        Cuide da sua saúde
                    </p>
                    <h2 className="hero-title mt-2 text-4xl text-[#326750]">
                        Monitoramento e adesão ao tratamento
                    </h2>
                    <p className="mt-4 text-zinc-700 text-base md:text-lg w-full">
                        O acompanhamento contínuo do paciente com DPOC é fundamental para controlar a evolução da
                        doença e prevenir complicações. Consultas médicas regulares, exames de função pulmonar e avaliação
                        dos sintomas ajudam no ajuste do tratamento e na identificação precoce de agravamentos.
                    </p>
                </div>

                <div className="mt-8 w-full">
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
