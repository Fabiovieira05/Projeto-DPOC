import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

// 1. Dicionário de dados estáticos para manter o componente visual limpo
const INTEGRANTES = [
    { name: "Alana Laura Vieira dos Reis", image: "/team/Alana.png" },
    { name: "Ana Gabriela Alves Luna", image: "/team/Ana.png" },
    { name: "Esther de Sousa Araújo", image: "/team/Esther.png" },
    { name: "Isabela Correia e Silva", image: "/team/Isabela.png" },
    { name: "Maria Eduarda da Silva Alves", image: "/team/Maria_Eduarda.png" },
    { name: "Maria Victória Ferreira", image: "/team/Maria_Victoria.png" },
];

const DESENVOLVEDORES = [
    { name: "Artur Fernandes Galdino", image: "https://github.com/ArturFGaldino.png", githubUrl: "https://github.com/ArturFGaldino" },
    { name: "Fábio Alessandro Santos Vieira", image: "/team/Fabio.png", githubUrl: "https://github.com/Fabiovieira05" },
    { name: "Giovani de Oliveira Teodoro Coelho", image: "https://github.com/Gotc2607.png", githubUrl: "https://github.com/Gotc2607" },
    { name: "Yasmim de Souza Santos", image: "/team/Yasmim.jpeg", githubUrl: "https://github.com/eii-yahs" },
];

const REFERENCIAS_BIBLIOGRAFICAS = [
    "AGUIAR CARVALHO, P. V. et al. Perfil epidemiológico da mortalidade hospitalar por Doença Pulmonar Obstrutiva Crônica no estado do Maranhão no período de 2011 a 2021. Brazilian Journal of Implantology and Health Sciences, [S. I.], v. 5, n. 5, p. 2278-2289, 2023. DOI: 10.36557/2674-8169.2023v5n5p2278-2289. Disponível em: https://bjihs.emnuvens.com.br/bjihs/article/view/769. Acesso em: 7 maio 2026.",
    "AMERICAN LUNG ASSOCIATION. Doença pulmonar obstrutiva crônica (DPOC). [S. I.], [s.d.]. Disponível em: https://www.lung.org. Acesso em: 7 maio 2026.",
    "ASSISTÊNCIA de enfermagem no planejamento de cuidados ao paciente com doença pulmonar obstrutiva crônica. Brazilian Journal of Health Review, [S. I.], v. 5, n. 5, 2022. DOI: 10.34119/bjhrv5n5-227. Disponível em: https://ojs.brazilianjournals.com.br. Acesso em: 8 maio 2026.",
    "BORGES, M. C.; VIANNA, E. S. O.; TERRA FILHO, J. Abordagem terapêutica na exacerbação da doença pulmonar obstrutiva crônica (DPOC). Medicina (Ribeirão Preto), Ribeirão Preto, v. 36, n. 2/4, p. 241-247, 2003. Disponível em: https://www.revistas.usp.br/rmrp. Acesso em: 7 maio 2026.",
    "BRASIL. Ministério da Saúde. Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde (CONITEC). Protocolo Clínico e Diretrizes Terapêuticas da Doença Pulmonar Obstrutiva Crônica (DPOC). Brasília, DF: Ministério da Saúde, 2025. Disponível em: https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt-da-doenca-pulmonar-obstrutiva-cronica. Acesso em: 8 maio 2026.",
    "BRASIL. Ministério da Saúde. Comissão Nacional de Incorporação de Tecnologias no SUS. Relatório de recomendação n. 935: furoato de fluticasona para doença pulmonar obstrutiva crônica. Brasília, DF: Ministério da Saúde, 2024. Disponível em: https://bvsms.saude.gov.br. Acesso em: 9 maio 2026.",
    "BRASIL. Ministério da Saúde. Portaria Conjunta nº 1, de 20 de janeiro de 2021. Aprova o Protocolo Clínico e Diretrizes Terapêuticas da Doença Pulmonar Obstrutiva Crônica. Brasília, DF: Secretaria de Atenção Especializada à Saúde, 2021.",
    "BRASIL. Ministério da Saúde. Portaria Conjunta SAES/SCTIE/MS nº 19, de 16 de novembro de 2021. Brasília, DF: Ministério da Saúde, 2021. Disponível em: https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20220912 PCDT Re sumido_DPOC_final.pdf. Acesso em: 8 maio 2026.",
    "BRASIL. Ministério da Saúde. Portaria Conjunta SAES/SCTIE nº 29, de 27 de novembro de 2025. Diário Oficial da União, Brasília, DF, 2025. Disponível em: https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt-da-doenca-pulmonar-obstrutiva-cronica. Acesso em: 7 maio 2026.",
    "CAMPONÊS, D. L. et al. Exposição da equipe de enfermagem ao estresse no ambiente de trabalho na unidade de urgência e emergência. Life Style, [S. I.], v. 2, n. 1, p. 31-47, 2015. Disponível em: https://revistas.unasp.edu.br. Acesso em: 7 maio 2026.",
    "COELHO, Arthur Emanuel Campos et al. Abordagem geral da Doença Pulmonar Obstrutiva Crônica (DPOC): uma revisão narrativa. Revista Eletrônica Acervo Médico, [S. I.], v. 1, p. e485, 2021.",
    "CRUZ, M. M.; PEREIRA, M. Epidemiology of Chronic Obstructive Pulmonary Disease in Brazil: a systematic review and meta-analysis. Ciência & Saúde Coletiva, [S. I.], v. 25, n. 11, p. 4547-4557, 2020. Disponível em: https://doi.org/10.1590/1413-812320202511.00222019. Acesso em: 7 maio 2026.",
    "DISTRITO FEDERAL. Secretaria de Estado de Saúde. Assistência Farmacêutica: medicamentos de componente especializado (alto custo). Brasília, DF: SES-DF, 2026. Disponível em: https://www.saude.df.gov.br. Acesso em: 9 maio 2026.",
    "ENFERMAGEM na doença pulmonar obstrutiva crônica (DPOC): abordagem e desafios para promover a qualidade de vida. Revista Ibero-Americana de Humanidades, Ciências e Educação, [S. I.], v. 1, n. 1, [s.d.]. DOI: 10.51891/rease.v1i01.17420. Disponível em: https://periodicorease.pro.br. Acesso em: 9 maio 2026.",
    "GLORIA, Y.; HORWITZ, R. Integrative medicine for respiratory conditions: asthma and COPD. Medical Clinics of North America, [S. I.], v. 101, n. 5, p. 925-941, 2017. DOI: 10.1016/j.mcna.2017.04.008. Acesso em: 9 maio 2026.",
    "GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE (GOLD). Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease: 2024 report. [S. I.]: GOLD, 2024.",
    "GLOBAL INITIATIVE FOR CHRONIC OBSTRUCTIVE LUNG DISEASE (GOLD). Global strategy for the diagnosis, management, and prevention of chronic obstructive pulmonary disease: 2026 report. [S. l.]: GOLD, 2026. Disponível em: https://goldcopd.org. Acesso em: 27 maio 2026.",
    "HOSPITAL UNIVERSITÁRIO DE BRASÍLIA (HUB-UnB). Serviço de Pneumologia e Reabilitação Pulmonar. Brasília, DF, [s.d.]. Disponível em: https://www.hub.unb.br. Acesso em: 9 maio 2026.",
    "INSTITUTO SOMED. Mitos sobre a DPOC. São Paulo, 2024. Disponível em: https://institutosomed.com.br. Acesso em: 9 maio 2026.",
    "JESUS, Ana Karolina Barros de et al. Doença pulmonar obstrutiva crônica e educação em saúde: relato de experiência sobre ação extensionista em escola pública de Maceió - AL. Revista ELO - Diálogos em Extensão, [S. I.], v. 13, 2024. DOI: 10.21284/elo.v13i.17642. Disponível em: https://periodicos.ufv.br/elo/article/view/17642. Acesso em: 9 maio 2026.",
    "KANCHUSTAMBHAM, Venkata; BROWN, Brandon D. Doença pulmonar obstrutiva crônica (DPOC). In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing, 2026. Atualizado em: 15 abr. 2026. Disponível em: https://www.ncbi.nlm.nih.gov/books/NBK559281/. Acesso em: 8 maio 2026.",
    "LOPES, Giovanna Hyczy; SALES, Nilene; BARIONI, Carina Toledo Scoparo. Adesão ao tratamento em pacientes com doença pulmonar obstrutiva crônica: desafios e implicações. Brazilian Journal of Implantology and Health Sciences, [S. I.], v. 7, n. 4, p. 100-123, 2025. Disponível em: https://bjihs.emnuvens.com.br. Acesso em: 8 maio 2026.",
    "LUNG FOUNDATION AUSTRALIA. A verdade sobre 8 mitos comuns da DPOC (Doença Pulmonar Obstrutiva Crônica). Austrália, 2024. Disponível em: https://lungfoundation.com.au. Acesso em: 9 maio 2026.",
    "LUVISOTTO, J. J.; RAMALHO, O. A. H. A enfermagem atuando na prevenção e reabilitação da doença obstrutiva pulmonar crônica - DPOC. [S. I.: s. n.], 2023. Acesso em: 9 maio 2026.",
    "MATA, L. E. L. F. S. et al. Perfil epidemiológico das internações hospitalares por bronquite e DPOC no SUS em Alagoas entre 2018 a 2022. Brazilian Journal of Health Review, [S. I.], v. 6, n. 5, p. 23652-23660, 2023. DOI: 10.34119/bjhrv6n5-420. Disponível em: https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/63599. Acesso em: 7 maio 2026.",
    "MATOS, Rômulo Vasconcellos Ribeiro et al. Complicações clínicas do DPOC exacerbado em idosos. Revista Ibero-Americana de Humanidades, Ciências e Educação, [S. I.], v. 1, n. 1, p. 1, 2025. DOI: 10.51891/rease.v1i1.18098. Disponível em: https://periodicorease.pro.br/rease/article/view/18098. Acesso em: 9 maio 2026.",
    "MINISTÉRIO DA SAÚDE. Práticas integrativas e complementares (PICS): quais são e para que servem. Brasília, DF: Ministério da Saúde, 2023. Disponível em: https://www.gov.br/saude. Acesso em: 7 maio 2026.",
    "PORTAL INFOSAÚDE. Painel Infosaúde - estoque de medicamentos. Brasília, DF, [s.d.]. Disponível em: https://info.saude.df.gov.br. Acesso em: 9 maio 2026.",
    "REIS, Luiza Alves Guerra Scarpelli et al. Doença Pulmonar Obstrutiva Crônica: uma revisão de literatura. Brazilian Journal of Health and Biological Science, [S. I.], v. 1, n. 1, p. e35, 2024. Disponível em: https://bjhbs.com.br/index.php/bjhbs/article/view/35. Acesso em: 7 maio 2026.",
    "ROMALDINI, José Gustavo Barian et al. Co-morbidades em DPOC: mais do que uma mera associação. Sociedade Paulista de Pneumologia e Tisiologia Biênio, [S. I.], v. 2017, p. 31, 2016. Acesso em: 9 maio 2026.",
    "SOCIEDADE BRASILEIRA DE PNEUMOLOGIA E TISIOLOGIA (SBPT). Doença Pulmonar Obstrutiva Crônica (DPOC). Brasília, DF: SBPT, 2024. Acesso em: 9 maio 2026.",
    "TEMPLE HEALTH. 5 mitos comuns sobre DPOC - desmistificados. Philadelphia, 2024. Disponível em: https://www.templehealth.org. Acesso em: 9 maio 2026.",
    "ZANCO, M. et al. Impacto da reabilitação pulmonar na qualidade de vida de pacientes com DPOC. Jornal Brasileiro de Pneumologia, [S. I.], v. 48, n. 2, 2022. Acesso em: 9 maio 2026."
];

// 2. Componente reutilizável e isolado
function TeamMember({ name, image, githubUrl }: { name: string; image: string | null; githubUrl?: string }) {
    const isClickable = !!githubUrl;

    const content = (
        <li className={`flex flex-col items-center text-center w-full h-full ${!githubUrl ? '' : 'group cursor-pointer'}`}>
            <figure
                className={`w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-3 rounded-full overflow-hidden border-2 bg-transparent relative flex-shrink-0 transition-transform duration-300 ${isClickable ? 'border-grey-800 group-hover:scale-105 group-hover:border-green-500 group-hover:shadow-[0_4px_15px_rgba(34,197,94,0.25)]' : 'border-grey-800'}`}
                aria-hidden={!image}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={`Avatar de ${name}`}
                        fill
                        className={`object-cover ${isClickable ? 'transition-transform duration-500 group-hover:scale-110' : ''}`}
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 112px, 128px"
                    />
                ) : (
                    <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                        <span className="text-3xl text-stone-400">👤</span>
                    </div>
                )}
            </figure>

            <h3 className={`font-poppins flex-grow flex items-center justify-center w-full px-1 text-lg sm:text-sm md:text-base font-medium text-grey-800 leading-tight transition-colors duration-300 ${isClickable ? 'group-hover:text-green-500' : ''}`}>
                {name}
            </h3>

            {githubUrl && (
                <div className="mt-3.5 sm:mt-3 flex items-center gap-2 px-5 py-3 sm:px-4 sm:py-1.5 bg-green-500 text-white rounded-md text-base sm:text-sm md:text-base font-semibold transition-all duration-300 shadow-sm group-hover:bg-green-800 group-hover:-translate-y-1 group-hover:shadow-[0_4px_12px_rgba(34,197,94,0.4)]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.3-1.5 6.3-6.74a4.8 4.8 0 0 0-1.3-3.2 4.8 4.8 0 0 0-.1-3.1s-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.5 6.3 1.5 6.3 1.5a4.8 4.8 0 0 0-.1 3.1 4.8 4.8 0 0 0-1.3 3.2c0 5.2 3.2 6.4 6.3 6.74a4.8 4.8 0 0 0-1 3.06v4" />
                    </svg>
                    <span>GitHub</span>
                </div>
            )}
        </li>
    );

    if (githubUrl) {
        return (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full block outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg" aria-label={`Perfil do GitHub de ${name}`}>
                {content}
            </a>
        );
    }

    return content;
}

// 3. Estrutura principal da Página
export default function SobreNos() {
    return (
        <main className="min-h-screen bg-[#F3FBF4] px-6 py-16 flex flex-col items-center font-sans">

            {/* Seção Integrantes */}
            <ScrollReveal>
                <section className="w-full max-w-5xl mx-auto mb-16" aria-labelledby="integrantes-title">
                    <h2 id="integrantes-title" className="font-science-gothic text-2xl md:text-3xl  text-green-500 text-center mb-10">
                        Integrantes
                    </h2>

                    {/* Grid: 1 no mobile, 3 no tablet, 6 no desktop */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-8 justify-items-center items-stretch">
                        {INTEGRANTES.map((person) => (
                            <TeamMember key={person.name} {...person} />
                        ))}
                    </ul>
                </section>
            </ScrollReveal>

            {/* Seção Desenvolvedores */}
            <ScrollReveal>
                <section className="w-full max-w-4xl mx-auto" aria-labelledby="desenvolvedores-title">
                    <h2 id="desenvolvedores-title" className="font-science-gothic text-2xl md:text-3xl  text-green-500 text-center mb-10">
                        Desenvolvedores
                    </h2>

                    {/* Grid: 1 no mobile, 2 ou 4 para maiores */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center items-stretch">
                        {DESENVOLVEDORES.map((person) => (
                            <TeamMember key={person.name} {...person} />
                        ))}
                    </ul>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section
                    className="w-full max-w-5xl mx-auto mt-16 pt-16"
                    aria-labelledby="referencias-title"
                >
                    <h2
                        id="referencias-title"
                        className="font-science-gothic text-2xl md:text-3xl text-green-500 text-center mb-10"
                    >
                        Referências
                    </h2>
                    <ol className="list-decimal list-outside pl-4 md:pl-5 space-y-4 font-poppins text-sm md:text-base text-grey-800 text-justify leading-relaxed break-all sm:break-words">
                        {REFERENCIAS_BIBLIOGRAFICAS.map((referencia, index) => (
                            <li key={index}>
                                {referencia}
                            </li>
                        ))}
                    </ol>
                </section>
            </ScrollReveal>
        </main>
    );
}
