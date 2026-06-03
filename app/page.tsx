import Image from "next/image";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[color:var(--background)] font-sans">
      <main className="mx-auto w-full max-w-7xl px-6 py-12">
        <section className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center">
          <div className="md:flex-1">
            <h1 className="hero-title text-[#0f1720] leading-tight">
              Respirar bem é
              <span className="ml-2 italic text-dpoc-green">viver melhor!</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-700">
              A Doença Pulmonar Obstrutiva Crônica (DPOC) afeta milhões de pessoas e
              compromete a qualidade de vida de forma progressiva. Conheça os sintomas, os fatores
              de risco, os tratamentos e as formas de prevenção.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="btn-dpoc inline-flex items-center rounded-md px-6 py-3 font-medium shadow-sm">
                Saiba mais
              </a>
              <a href="#" className="btn-dpoc-outline inline-flex items-center rounded-md px-6 py-3 font-medium">
                Prevenção
              </a>
            </div>
          </div>

          <div className="md:flex-1 flex items-center justify-center">
            <div className="w-full max-w-[520px]">
              <Image
                src="/imagem1.png"
                alt="Ilustração pessoa tossindo"
                width={520}
                height={520}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <section className="w-full bg-[color:var(--background)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-dpoc-green">Desmistificando</p>
            <h2 className="mt-2 text-2xl font-bold text-[#0f1720]">Mitos e verdades</h2>
            <p className="mt-3 text-zinc-700">
              Existem muitos equívocos sobre a DPOC que podem atrasar o diagnóstico e prejudicar o
              tratamento. Clique em cada afirmação para descobrir a verdade.
            </p>

            <div className="mt-6">
              <Accordion
                items={[
                  { title: "Só fumantes desenvolvem DPOC", content: "Resposta: Não. Embora o tabagismo seja o fator de risco mais importante, DPOC pode ocorrer em não fumantes por exposições ocupacionais, poluição e fatores genéticos." },
                  { title: "Quem tem DPOC não pode praticar exercícios", content: "Resposta: Falso. Exercícios orientados são parte do tratamento e ajudam a manter a capacidade funcional." },
                  { title: "Parar de fumar não ajuda depois de muitos anos de tabagismo", content: "Resposta: Parar de fumar sempre traz benefícios e reduz a progressão da doença." },
                  { title: "DPOC afeta apenas idosos", content: "Resposta: Embora seja mais comum em pessoas mais velhas, pode aparecer em adultos mais jovens dependendo das exposições e histórico." },
                  { title: "DPOC não tem tratamento", content: "Resposta: Existem tratamentos que aliviam sintomas, melhoram a qualidade de vida e reduzem exacerbações." },
                  { title: "Falta de ar com esforço é normal no envelhecimento", content: "Resposta: Não necessariamente; falta de ar excessiva deve ser avaliada, pois pode indicar DPOC u outras condições tratáveis." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
