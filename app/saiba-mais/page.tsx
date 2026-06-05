import React from 'react';
import IntroducaoDpoc from './components/IntroducaoDPOC';
import StatsBanner from './components/StatsBanner';
import SintomasDpoc from './components/SintomasDPOC';
import DiagnosticoDpoc from './components/DiagnosticoDPOC';
import TratamentoDpoc from './components/TratamentoDPOC';
import MonitoramentoTratamento from './components/MonitoramentoTratamento';
import PrevencaoDpoc from './components/PrevencaoDpoc';
import RedeCredenciada from './components/RedeCredenciada';
import ScrollReveal from '../components/ScrollReveal';

export default function SaibaMaisPage() {
  return (
    <main className="min-h-screen bg-[#f4f9f5]">
      <ScrollReveal><IntroducaoDpoc /></ScrollReveal>
      <ScrollReveal><StatsBanner /></ScrollReveal>
      <ScrollReveal><SintomasDpoc /></ScrollReveal>
      <ScrollReveal><DiagnosticoDpoc /></ScrollReveal>
      <ScrollReveal><TratamentoDpoc /></ScrollReveal>
      <ScrollReveal><MonitoramentoTratamento /></ScrollReveal>
      <ScrollReveal><PrevencaoDpoc /></ScrollReveal>
      <ScrollReveal><RedeCredenciada /></ScrollReveal>
    </main>
  );
}