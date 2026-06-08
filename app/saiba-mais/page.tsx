import React from 'react';
import IntroducaoDpoc from "@/components/saiba-mais/introducao-dpoc";
import StatsBanner from "@/components/saiba-mais/stats-banner";
import SintomasDpoc from "@/components/saiba-mais/sintomas-dpoc";
import DiagnosticoDpoc from "@/components/saiba-mais/diagnostico-dpoc";
import TratamentoDpoc from "@/components/saiba-mais/tratamento-dpoc";
import MonitoramentoTratamento from "@/components/saiba-mais/monitoramento-tratamento";
import PrevencaoDpoc from "@/components/saiba-mais/prevencao-dpoc";
import RedeCredenciada from "@/components/saiba-mais/rede-credenciada";
import ScrollReveal from "@/components/common/scroll-reveal";
import ComplicacoesDpoc from "@/components/saiba-mais/complicacoes-dpoc";
import FatoresRiscoDpoc from "@/components/saiba-mais/fatores-risco-dpoc";
import DadosEpidemiologicos from "@/components/saiba-mais/dados-epidemiologicos";

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
      {/* <div id="fatores-risco"><ScrollReveal><FatoresRiscoDpoc /></ScrollReveal></div> */}
      <div id="dados-epidemiologicos"><ScrollReveal><DadosEpidemiologicos /></ScrollReveal></div>
    </main>
  );
}