import Hero from "./components/Hero";
import Desmistificando from "./components/Desmistificando";
import CuidadoIntegral from "./components/CuidadoIntegral";
import BemEstarIntegral from "./components/BemEstarIntegral";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <div className="flex-1">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Desmistificando />
        </ScrollReveal>
        <ScrollReveal>
          <CuidadoIntegral />
        </ScrollReveal>
        <ScrollReveal>
          <BemEstarIntegral />
        </ScrollReveal>
      </div>
    </div>
  );
}