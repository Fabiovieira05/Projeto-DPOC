import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e3a2b] text-white mt-auto">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-8">
        
       
        <div className="flex justify-center md:justify-end mb-8">
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="mb-3">
              <Image
                src="/unblogo.png"
                alt="Logo Universidade de Brasília"
                width={110}
                height={40}
                className="object-contain mx-auto md:mx-0"
              />
            </div>
            <p className="text-sm font-medium text-white/90">
              Universidade de Brasília
            </p>
            <p className="text-sm text-white/90">
              Faculdade de Ciências da Saúde
            </p>
          </div>
        </div>

     
        <div className="border-t border-white/10 w-full mb-6"></div>

    
        <div className="text-center text-xs md:text-sm text-white/60">
          <p>
            Desenvolvido com o objetivo de promover educação em saúde e conscientização sobre a DPOC. Projeto acadêmico — sem fins comerciais.
          </p>
        </div>
        
      </div>
    </footer>
  );
}