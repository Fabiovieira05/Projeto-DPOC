import Hero from "./components/Hero";
import Desmistificando from "./components/Desmistificando";
import CuidadoIntegral from "./components/CuidadoIntegral";
import BemEstarIntegral from "./components/BemEstarIntegral";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <div className="flex-1">
        <Hero />
        <Desmistificando />
        <CuidadoIntegral />
        <BemEstarIntegral />
      </div>
    </div>
  );
}