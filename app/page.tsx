import Hero from "./components/Hero";
import Desmistificando from "./components/Desmistificando";
import CuidadoIntegral from "./components/CuidadoIntegral";
import BemEstarIntegral from "./components/BemEstarIntegral";
import ScrollReveal from "./components/ScrollReveal";
import ImpactBanner from "./components/ImpactBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <div id="main-content" className="flex-1">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <ImpactBanner />
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