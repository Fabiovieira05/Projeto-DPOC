import Image from "next/image";

export default function Hero() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">
      <section className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-center">
        <div className="md:flex-1">
          <h1 className="hero-title font-normal text-[#0f1720] leading-tight">
            Respirar bem é
            <span className="ml-2 italic text-dpoc-green">viver melhor!</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-700">
            A Doença Pulmonar Obstrutiva Crônica (DPOC) afeta milhões de pessoas e
            compromete a qualidade de vida de forma progressiva. Conheça os sintomas, os fatores
            de risco, os tratamentos e as formas de prevenção.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="btn-dpoc inline-flex items-center justify-center rounded-md px-6 py-3 font-medium shadow-sm">
              Saiba mais
            </a>
            <a href="#" className="btn-dpoc-outline inline-flex items-center justify-center rounded-md px-6 py-3 font-medium">
              Prevenção
            </a>
          </div>
        </div>

        <div className="md:flex-1 flex items-center justify-center">
          <div className="w-full max-w-[520px]">
            <Image
              src="/imagem1.png"
              alt="Ilustração de uma mulher com falta de ar tossindo e cobrindo a boca com um lenço, indicando sintomas respiratórios"
              width={520}
              height={520}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}