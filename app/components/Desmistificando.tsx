import Accordion from "./Accordion";

export default function Desmistificando() {
  return (
    <section className="w-full">
      <div className="flex flex-col mx-auto w-full max-w-7xl px-6 py-16 gap-10 md:gap-12">
        <header className="flex flex-col text-center md:text-left items-center md:items-start w-full">
          <span className="font-poppins text-green-400 font-medium text-lg md:text-2xl mb-2 md:mb-0">
            Desmistificando
          </span>
          <h2 className="text-green-500 text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6 md:mb-8 font-sans">
            Mitos e verdades
          </h2>
          <p className="flex flex-col h-full text-sm md:text-xl leading-relaxed gap-6 text-grey-900 font-poppins">
            Existem muitos equívocos sobre a DPOC que podem atrasar o diagnóstico e prejudicar o
            tratamento. Clique em cada afirmação para descobrir a verdade.
          </p>
        </header>

        <div className="w-full">
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