import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">

        {/* Lado Esquerdo: Textos e Imagem Mobile */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 md:gap-8 w-full">

          <h1 className="hero-title font-normal text-[#0f1720] leading-tight flex flex-col md:gap-2">
            <span>Respirar bem é</span>
            <span className="block italic text-dpoc-green">viver melhor!</span>
          </h1>

          {/* Imagem Exclusiva Mobile (Entre Título e Texto) */}
          <div className="md:hidden w-full flex justify-center max-w-[400px]">
            <Image
              src="/imagem1.png"
              alt="Ilustração de DPOC"
              width={520}
              height={520}
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <p className="max-w-xl text-lg text-zinc-700">
            A Doença Pulmonar Obstrutiva Crônica (DPOC) afeta milhões de pessoas e
            compromete a qualidade de vida de forma progressiva. Conheça os sintomas, os fatores
            de risco, os tratamentos e as formas de prevenção.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row w-full justify-center md:justify-start">
            <Link href="/saiba-mais" className="btn-dpoc inline-flex items-center justify-center rounded-md px-6 py-3 font-medium shadow-sm">
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Lado Direito: Imagem Exclusiva Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center w-full max-w-[520px]">
          <Image
            src="/imagem1.png"
            alt="Ilustração de DPOC"
            width={520}
            height={520}
            className="object-contain"
            priority
            sizes="(max-width: 1200px) 50vw, 600px"
          />
        </div>

      </section>
    </main>
  );
}