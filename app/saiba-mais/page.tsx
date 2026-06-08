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
import FatoresRiscoDpoc from './components/FatoresRiscoDpoc';
import DadosEpidemiologicos from './components/DadosEpidemiologicos';

export default function SaibaMaisPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f4f9f5]">
      {/* 1. O Cenário: Contexto e Impacto (Urgência) */}
      <div id="introducao"><ScrollReveal><IntroducaoDpoc /></ScrollReveal></div>
      <div id="estatisticas"><ScrollReveal><StatsBanner /></ScrollReveal></div>
      <div id="dados-epidemiologicos"><ScrollReveal><DadosEpidemiologicos /></ScrollReveal></div>

      {/* 2. Autoidentificação: Sintomas e Causas */}
      <div id="sintomas"><ScrollReveal><SintomasDpoc /></ScrollReveal></div>
      <div id="prevencao"><ScrollReveal><PrevencaoDpoc /></ScrollReveal></div>

      {/* 3. O Conflito: Riscos de não tratar (O "Vilão") */}
      <div id="complicacoes"><ScrollReveal><ComplicacoesDpoc /></ScrollReveal></div>

      {/* 4. A Solução: Diagnóstico e Cuidado Integral */}
      <div id="diagnostico"><ScrollReveal><DiagnosticoDpoc /></ScrollReveal></div>
      <div id="tratamento"><ScrollReveal><TratamentoDpoc /></ScrollReveal></div>
      <div id="monitoramento"><ScrollReveal><MonitoramentoTratamento /></ScrollReveal></div>

      {/* 5. Ação Final: Acesso ao Cuidado */}
      <div id="rede"><ScrollReveal><RedeCredenciada /></ScrollReveal></div>
    </main>
  );
}