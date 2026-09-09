import React, { useState } from 'react';
import { FLAGSHIP_PROJECT, AGENCY_INFO } from '../data/agencyData';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Check,
  Smartphone,
  Users,
  Car,
  TrendingUp,
  MessageCircle,
  QrCode,
  Layers,
  ChevronRight,
} from 'lucide-react';

export const FeaturedCaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'driver' | 'passenger' | 'rebrand'>('home');

  return (
    <section id="case-01s" className="py-24 bg-[#18181B] border-t border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CASE DE SUCESSO EM DESTAQUE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              01S Mobilidade
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-2xl">
              Do Rebranding à Plataforma Web Completa: Como transformamos a presença digital da antiga MOB3L em uma marca de autoridade no transporte de passageiros.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs font-mono border border-white/5">
              Cliente: 01S Mobilidade
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs font-mono border border-white/5">
              Ano: 2026
            </span>
          </div>
        </div>

        {/* The 3 Screen Interactive Viewers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Screen Navigation & Project Story */}
          <div className="lg:col-span-5 space-y-6">
            {/* Screen Selector Buttons */}
            <div className="p-2 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                  activeTab === 'home'
                    ? 'bg-gradient-to-r from-emerald-600/30 to-transparent border border-emerald-500/40 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'home' ? 'bg-emerald-500 text-black' : 'bg-white/5 text-gray-400'}`}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">01. Página Inicial (Home)</p>
                    <p className="text-xs text-gray-400">Mobilidade inteligente de cara nova</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'home' ? 'rotate-90 text-emerald-400' : 'text-gray-600'}`} />
              </button>

              <button
                onClick={() => setActiveTab('driver')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                  activeTab === 'driver'
                    ? 'bg-gradient-to-r from-orange-600/30 to-transparent border border-orange-500/40 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'driver' ? 'bg-orange-500 text-black' : 'bg-white/5 text-gray-400'}`}>
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">02. Página de Motoristas</p>
                    <p className="text-xs text-gray-400">Ganhe mais dirigindo com a 01S</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'driver' ? 'rotate-90 text-orange-400' : 'text-gray-600'}`} />
              </button>

              <button
                onClick={() => setActiveTab('passenger')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                  activeTab === 'passenger'
                    ? 'bg-gradient-to-r from-emerald-600/30 to-transparent border border-emerald-500/40 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'passenger' ? 'bg-emerald-500 text-black' : 'bg-white/5 text-gray-400'}`}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">03. Página de Passageiros</p>
                    <p className="text-xs text-gray-400">Corrida simples, ágil e confiável</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'passenger' ? 'rotate-90 text-emerald-400' : 'text-gray-600'}`} />
              </button>

              <button
                onClick={() => setActiveTab('rebrand')}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                  activeTab === 'rebrand'
                    ? 'bg-gradient-to-r from-purple-600/30 to-transparent border border-purple-500/40 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${activeTab === 'rebrand' ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">04. A Transição da Marca</p>
                    <p className="text-xs text-gray-400">De MOB3L para 01S Mobilidade</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === 'rebrand' ? 'rotate-90 text-purple-400' : 'text-gray-600'}`} />
              </button>
            </div>

            {/* Scope Deliverables List */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Entregáveis Realizados pela Arte do Algoritmo</span>
              </h3>
              <ul className="space-y-3">
                {FLAGSHIP_PROJECT.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Real Words Quote snippet */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                  JN
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Junior • Sócio da 01S Mobilidade</p>
                  <p className="text-[11px] text-gray-400">Validação pós-projeto via WhatsApp</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm italic text-gray-300 leading-relaxed">
                &ldquo;O Google mandou um email parabenizando os acessos em menos de 1 mês tantas views lá 👏 Top... e o site tem muita participação nisso. Seu trabalho é muito profissional João! Meu irmão é da área e elogiou pra caramba!!&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: High-Fidelity Browser Mockup with Real Structure */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111827] border border-white/15 shadow-2xl overflow-hidden">
              {/* Browser Window Header */}
              <div className="px-4 py-3 bg-[#0B0F19] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                {/* Simulated URL bar */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 font-mono w-64 max-w-full justify-center truncate">
                  <span className="text-emerald-400 text-[10px]">https://</span>
                  <span>01smobilidade.com.br{activeTab === 'driver' ? '/motoristas' : activeTab === 'passenger' ? '/passageiros' : activeTab === 'rebrand' ? '/sobre-a-marca' : ''}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <span className="hidden sm:inline text-[11px] font-mono text-emerald-400">PROJETO AO VIVO</span>
                </div>
              </div>

              {/* Browser Content Simulated Viewport (Scrollable with rich contents matching real screenshots) */}
              <div className="h-[520px] overflow-y-auto custom-scrollbar bg-[#0D1F16] text-white p-4 sm:p-6 select-none font-sans">
                {/* 01S Brand Navbar inside mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 sticky top-0 bg-[#0D1F16]/95 backdrop-blur-sm z-20">
                  <div className="flex items-center gap-2.5">
                    {/* 01S Logo Symbol */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-orange-500 flex items-center justify-center font-black text-black text-sm tracking-tighter shadow-md">
                      01S
                    </div>
                    <span className="font-extrabold text-sm tracking-tight text-white">01S MOBILIDADE</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium">
                    <span className={`cursor-pointer ${activeTab === 'home' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`} onClick={() => setActiveTab('home')}>Home</span>
                    <span className={`cursor-pointer ${activeTab === 'driver' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`} onClick={() => setActiveTab('driver')}>Motoristas</span>
                    <span className={`cursor-pointer ${activeTab === 'passenger' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`} onClick={() => setActiveTab('passenger')}>Passageiros</span>
                    <div className="px-3 py-1 rounded-full bg-emerald-500 text-black text-[11px] font-bold">
                      WhatsApp
                    </div>
                  </div>
                </div>

                {/* TAB 1: HOME SCREEN MOCKUP */}
                {activeTab === 'home' && (
                  <div className="space-y-8 animate-fadeIn">
                    {/* Hero Section */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-[#0B2317] to-[#122A1E] border border-emerald-500/20 overflow-hidden">
                      <div className="relative z-10 max-w-lg">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold mb-3 border border-emerald-500/30">
                          De cara nova. Com o coração de sempre!
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
                          Mobilidade inteligente. Agora, de cara nova.
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                          A 01S Mobilidade evoluiu para oferecer mais eficiência, organização e confiança com a mesma operação que você já conhece.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          <button onClick={() => setActiveTab('driver')} className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-xs">
                            Sou motorista
                          </button>
                          <button onClick={() => setActiveTab('passenger')} className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-xs">
                            Sou Passageiro
                          </button>
                        </div>
                      </div>

                      {/* Visual 3D Ribbon badge */}
                      <div className="mt-6 sm:mt-0 sm:absolute sm:right-4 sm:top-6 p-4 rounded-xl bg-black/40 border border-emerald-500/30 backdrop-blur-md text-center max-w-[180px]">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-emerald-400 to-orange-400 flex items-center justify-center font-black text-black text-base mb-2">
                          01S
                        </div>
                        <p className="text-[10px] text-gray-300 font-medium leading-tight">
                          Transporte Seguro & Avaliado na Bahia
                        </p>
                      </div>
                    </div>

                    {/* Rebrand Notice Block */}
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                      <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        Estamos de cara nova — Da MOB3L para 01S Mobilidade
                      </h5>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        A Mob3L evoluiu e agora é 01S Mobilidade. Mudamos nossa marca para oferecer uma experiência ainda melhor, mas continuamos com a mesma equipe, motoristas e qualidade que você confia.
                      </p>
                    </div>

                    {/* Differentials Grid */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">Nossos Diferenciais</h5>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                          <p className="font-bold text-white">Organização real</p>
                          <p className="text-[11px] text-gray-400">Gestão transparente e frotas monitoradas</p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                          <p className="font-bold text-white">Pontualidade garantida</p>
                          <p className="text-[11px] text-gray-400">Atendimento ágil para suas viagens</p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                          <p className="font-bold text-white">Serviço profissional</p>
                          <p className="text-[11px] text-gray-400">Motoristas credenciados e avaliados</p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                          <p className="font-bold text-white">Suporte humanizado</p>
                          <p className="text-[11px] text-gray-400">Atendimento local direto por WhatsApp</p>
                        </div>
                      </div>
                    </div>

                    {/* App Download with QR Code */}
                    <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-900/40 to-black/60 border border-emerald-500/30 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-white">Baixe o app e peça sua corrida</p>
                        <p className="text-xs text-gray-300">Disponível para motoristas e passageiros</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white text-black shrink-0">
                        <QrCode className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: DRIVER SCREEN MOCKUP */}
                {activeTab === 'driver' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-950/50 via-[#1C150D] to-[#251A0C] border border-orange-500/30">
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-[11px] font-bold mb-3 border border-orange-500/30">
                        Para Motoristas Parceiros
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                        Ganhe mais dirigindo com a 01S Mobilidade
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        Aqui o motorista tem voz, suporte próximo e taxas justas para rodar com tranquilidade e lucrar de verdade.
                      </p>
                      <button className="px-5 py-2.5 rounded-xl bg-orange-500 text-black font-extrabold text-xs shadow-lg">
                        Cadastre-se para Rodar
                      </button>
                    </div>

                    {/* Driver Pillars */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                        <p className="font-bold text-orange-400">Ganhos Consistentes</p>
                        <p className="text-[11px] text-gray-400">Taxas desenhadas para valorizar o seu esforço</p>
                      </div>
                      <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                        <p className="font-bold text-orange-400">Mais Organização</p>
                        <p className="text-[11px] text-gray-400">Agendamentos e corridas corporativas organizadas</p>
                      </div>
                      <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                        <p className="font-bold text-orange-400">Suporte Próximo</p>
                        <p className="text-[11px] text-gray-400">Fale com pessoas reais, sem robôs travando</p>
                      </div>
                      <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                        <p className="font-bold text-orange-400">Mais Oportunidades</p>
                        <p className="text-[11px] text-gray-400">Traslados aeroporto, eventos e rotas executivas</p>
                      </div>
                    </div>

                    {/* Requirements Checklist */}
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
                        O que você precisa para começar:
                      </p>
                      <ul className="space-y-2 text-xs text-gray-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400" /> CNH definitiva com observação EAR (Exerce Atividade Remunerada)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400" /> Veículo em boas condições e documento (CRLV) em dia
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400" /> Smartphone com acesso à internet e GPS ativo
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400" /> Cadastro aprovado pela equipe de segurança 01S
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* TAB 3: PASSENGER SCREEN MOCKUP */}
                {activeTab === 'passenger' && (
                  <div className="space-y-8 animate-fadeIn">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-[#0B2117] to-[#132A1F] border border-emerald-500/30">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold mb-3 border border-emerald-500/30">
                        Para Passageiros
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                        Sua corrida, agora mais simples e confiável
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        Carros confortáveis, motoristas pontuais e preço justo do ponto de partida ao seu destino.
                      </p>
                      <button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-extrabold text-xs shadow-lg">
                        Pedir Corrida pelo App
                      </button>
                    </div>

                    {/* 3 Step Timeline */}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">Como Funciona</p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center shrink-0">1</div>
                          <div>
                            <p className="text-xs font-bold text-white">Baixe o aplicativo 01S</p>
                            <p className="text-[11px] text-gray-400">Instale no seu Android ou iPhone em poucos segundos</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center shrink-0">2</div>
                          <div>
                            <p className="text-xs font-bold text-white">Solicite sua corrida</p>
                            <p className="text-[11px] text-gray-400">Insira seu destino e veja a estimativa transparente na hora</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center shrink-0">3</div>
                          <div>
                            <p className="text-xs font-bold text-white">Acompanhe em tempo real</p>
                            <p className="text-[11px] text-gray-400">Veja o motorista se aproximando e viaje com segurança</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: REBRANDING STORY */}
                {activeTab === 'rebrand' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 via-[#1C1028] to-[#120D1B] border border-purple-500/30">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold mb-3 border border-purple-500/30">
                        Estratégia de Rebranding
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                        Da MOB3L para 01S Mobilidade
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Como a Arte do Algoritmo liderou a transição visual da marca mantendo a confiança dos usuários e consolidando a nova fase corporativa.
                      </p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="font-bold text-emerald-400 mb-1">1. Alinhamento de Conceito com os Sócios</p>
                        <p className="text-gray-300 leading-relaxed">
                          Conforme o feedback de Robson e Junior, branding é a construção da reputação. Traduzimos a evolução do serviço em uma identidade visual forte, combinando verde (eficiência, segurança) e laranja (energia, mobilidade).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="font-bold text-cyan-400 mb-1">2. Presença no Google e Indexação Rápida</p>
                        <p className="text-gray-300 leading-relaxed">
                          O Google enviou comunicado oficial congratulando os acessos em menos de 1 mês de lançamento, comprovando a estrutura de SEO e o apelo visual da página.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="font-bold text-purple-400 mb-1">3. Cópia Humanizada e Transparência</p>
                        <p className="text-gray-300 leading-relaxed">
                          A frase &ldquo;De cara nova. Com o coração de sempre!&rdquo; acolheu a base de usuários da MOB3L, garantindo retenção imediata.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mockup bottom bar */}
              <div className="px-4 py-3 bg-[#0B0F19] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Desenvolvido e Gerenciado por Arte do Algoritmo</span>
                </div>
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Falar sobre este case &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA for the Case */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-[#18181B] border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quer uma transformação digital completa como a da 01S Mobilidade?
            </h3>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              Cuidamos de tudo: do logotipo e identidade visual até a plataforma web responsiva com SEO pronto para o Google.
            </p>
          </div>

          <a
            href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
              'Olá João! Vi o case de sucesso da 01S Mobilidade no site da Arte do Algoritmo e quero um projeto com essa qualidade para minha empresa.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all hover:scale-105 shrink-0 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero um projeto como esse</span>
          </a>
        </div>
      </div>
    </section>
  );
};
