import Hero from "@/components/home/hero";
import Desmistificando from "@/components/home/desmistificando";
import CuidadoIntegral from "@/components/home/cuidado-integral";
import BemEstarIntegral from "@/components/home/bem-estar-integral";
import ScrollReveal from "@/components/common/scroll-reveal";
import ImpactBanner from "@/components/home/impact-banner";

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