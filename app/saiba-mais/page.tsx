import React from 'react';
import IntroducaoDpoc from './components/IntroducaoDpoc';
import StatsBanner from './components/StatsBanner';
import Footer from '../components/Footer';

export default function SaibaMaisPage() {
  return (
    <main className="min-h-screen bg-[#f4f9f5]">
      <IntroducaoDpoc />
      <StatsBanner />
      {/* Futuramente, as próximas seções da página "Saiba Mais" entrarão aqui abaixo */}
      <Footer />
    </main>
  );
}