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
import ComplicacoesDpoc from './components/ComplicacoesDpoc';

export default function SaibaMaisPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f4f9f5]">
      <div id="introducao"><ScrollReveal><IntroducaoDpoc /></ScrollReveal></div>
      <div id="estatisticas"><ScrollReveal><StatsBanner /></ScrollReveal></div>
      <div id="sintomas"><ScrollReveal><SintomasDpoc /></ScrollReveal></div>
      <div id="diagnostico"><ScrollReveal><DiagnosticoDpoc /></ScrollReveal></div>
      <div id="tratamento"><ScrollReveal><TratamentoDpoc /></ScrollReveal></div>
      <div id="monitoramento"><ScrollReveal><MonitoramentoTratamento /></ScrollReveal></div>
      <div id="prevencao"><ScrollReveal><PrevencaoDpoc /></ScrollReveal></div>
      <div id="rede"><ScrollReveal><RedeCredenciada /></ScrollReveal></div>
      <div id="complicacoes"><ScrollReveal><ComplicacoesDpoc /></ScrollReveal></div>
    </main>
  );
}