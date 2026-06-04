import Image from "next/image";

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
    { name: "Artur Fernandes Galdino", image: null },
    { name: "Fábio Alessandro Santos Vieira", image: "/team/Fabio.png" },
    { name: "Giovani de Oliveira Teodoro Coelho", image: null },
    { name: "Yasmim de Souza Santos", image: null },
];

// 2. Componente reutilizável e isolado
function TeamMember({ name, image }: { name: string; image: string | null }) {
    return (
        <li className="flex flex-col items-center text-center w-32 md:w-40">
            <figure
                className="w-28 h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border border-grey-800 bg-transparent relative flex-shrink-0"
                aria-hidden={!image} // a11y: Oculta o placeholder vazio do leitor de tela
            >
                {image && (
                    <Image
                        src={image}
                        alt={`Avatar de ${name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                    />
                )}
            </figure>
            <h3 className="font-poppins text-sm md:text-base font-medium text-grey-800 leading-tight">
                {name}
            </h3>
        </li>
    );
}

// 3. Estrutura principal da Página
export default function SobreNos() {
    return (
        <main className="min-h-screen bg-green-200 px-6 py-16 flex flex-col items-center font-sans">

            {/* Seção Integrantes */}
            <section className="w-full max-w-5xl mb-16" aria-labelledby="integrantes-title">
                <h2 id="integrantes-title" className="font-science-gothic text-2xl md:text-3xl  text-green-500 text-center mb-10">
                    Integrantes
                </h2>

                {/* Grid: 2 no mobile, 3 no tablet, 6 no desktop */}
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 justify-items-center">
                    {INTEGRANTES.map((person) => (
                        <TeamMember key={person.name} {...person} />
                    ))}
                </ul>
            </section>

            {/* Seção Desenvolvedores */}
            <section className="w-full max-w-4xl" aria-labelledby="desenvolvedores-title">
                <h2 id="desenvolvedores-title" className="font-science-gothic text-2xl md:text-3xl  text-green-500 text-center mb-10">
                    Desenvolvedores
                </h2>

                {/* Flexbox para centralizar itens irregulares (4 itens) */}
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-8">
                    {DESENVOLVEDORES.map((person) => (
                        <TeamMember key={person.name} {...person} />
                    ))}
                </ul>
            </section>

        </main>
    );
}