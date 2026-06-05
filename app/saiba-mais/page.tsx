import React from 'react';
import IntroducaoDpoc from './components/IntroducaoDPOC';
import StatsBanner from './components/StatsBanner';
import Footer from '../components/Footer';
import SintomasDpoc from './components/SintomasDPOC';
import DiagnosticoDpoc from './components/DiagnosticoDPOC';
import TratamentoDpoc from './components/TratamentoDPOC';

export default function SaibaMaisPage() {
  return (
    <main className="min-h-screen bg-[#f4f9f5]">
      <IntroducaoDpoc />
      <StatsBanner />
      <SintomasDpoc />
      <DiagnosticoDpoc />
      <TratamentoDpoc />
      <Footer />
    </main>
  );
}