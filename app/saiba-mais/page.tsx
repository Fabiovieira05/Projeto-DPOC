import React from 'react';
import IntroducaoDpoc from './components/IntroducaoDpoc';

export default function SaibaMaisPage() {
  return (
    <main className="min-h-screen bg-[#f4f9f5]">
      {/* Aqui você pode futuramente colocar um Header/Navbar se tiver */}
      
      {/* Primeira parte da página: Seção Introdução */}
      <IntroducaoDpoc />
      
      {/* Futuramente, as próximas seções da página "Saiba Mais" entrarão aqui abaixo */}
    </main>
  );
}