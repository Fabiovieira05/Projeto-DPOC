import Accordion from "./Accordion";

export default function Desmistificando() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="w-full text-left">
          <p className="text-sm font-semibold text-dpoc-green">
            Desmistificando
          </p>
          <h2 className="hero-title mt-2 text-3xl md:text-4xl text-[#326750]">
            Mitos e verdades
          </h2>
          <p className="mt-4 text-zinc-700 text-sm md:text-base max-w-3xl">
            Existem muitos equívocos sobre a DPOC que podem atrasar o diagnóstico e prejudicar o
            tratamento. Clique em cada afirmação para descobrir a verdade.
          </p>
        </div>

        <div className="mt-8 w-full">
          <Accordion
            items={[
              { title: "Só fumantes desenvolvem DPOC", content: "Resposta: Não. Embora o tabagismo seja o fator de risco mais importante, DPOC pode ocorrer em não fumantes por exposições ocupacionais, poluição e fatores genéticos." },
              { title: "Quem tem DPOC não pode praticar exercícios", content: "Resposta: Falso. Exercícios orientados são parte do tratamento e ajudam a manter a capacidade funcional." },
              { title: "Parar de fumar não ajuda depois de muitos anos de tabagismo", content: "Resposta: Parar de fumar sempre traz benefícios e reduz a progressão da doença." },
              { title: "DPOC afeta apenas idosos", content: "Resposta: Embora seja mais comum em pessoas mais velhas, pode aparecer em adultos mais jovens dependendo das exposições e histórico." },
              { title: "DPOC não tem tratamento", content: "Resposta: Existem tratamentos que aliviam sintomas, melhoram a qualidade de vida e reduzem exacerbações." },
              { title: "Falta de ar com esforço é normal no envelhecimento", content: "Resposta: Não necessariamente; falta de ar excessiva deve ser avaliada, pois pode indicar DPOC ou outras condições tratáveis." },
            ]}
          />
        </div>
      </div>
    </section>
  );
}