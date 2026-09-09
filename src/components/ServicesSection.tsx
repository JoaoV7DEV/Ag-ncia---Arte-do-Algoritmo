import React, { useState } from 'react';
import { SERVICE_PILLARS, AGENCY_INFO } from '../data/agencyData';
import { Code, Palette, TrendingUp, Check, ArrowRight, MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('desenvolvimento');

  const activePillar = SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'desenvolvimento':
        return <Code className="w-5 h-5" />;
      case 'design':
        return <Palette className="w-5 h-5" />;
      case 'presenca':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getPillarGradient = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'from-[#00FFFF] to-[#0284C7]';
      case 'magenta':
        return 'from-[#E71870] to-[#F43F5E]';
      case 'purple':
        return 'from-[#A855F7] to-[#6366F1]';
      default:
        return 'from-[#00FFFF] to-[#0284C7]';
    }
  };

  const getPillarBorder = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'border-[#00FFFF]/30';
      case 'magenta':
        return 'border-[#E71870]/30';
      case 'purple':
        return 'border-[#A855F7]/30';
      default:
        return 'border-[#00FFFF]/30';
    }
  };

  return (
    <section id="servicos" className="py-24 bg-[#272727] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#00FFFF] font-mono font-semibold">
            Nossos 3 Pilares de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
            Soluções completas para cada estágio da sua marca
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Do primeiro logotipo ao site de alta conversão integrado com o Google, oferecemos um ecossistema completo sem intermediários.
          </p>
        </div>

        {/* Pillar Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SERVICE_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                id={`tab-pillar-${pillar.id}`}
                onClick={() => setActivePillarId(pillar.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-white/10 text-white shadow-lg border-white/20 scale-[1.02]'
                    : 'bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] border-white/5'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-colors ${
                    isActive ? 'bg-[#00FFFF] text-[#18181B]' : 'bg-white/5 text-gray-400'
                  }`}
                >
                  {getPillarIcon(pillar.id)}
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-mono uppercase text-gray-400">
                    Pilar {pillar.pillarNumber}
                  </span>
                  <span>{pillar.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Details Showcase */}
        <div
          id="active-pillar-card"
          className={`p-6 sm:p-10 rounded-3xl bg-[#18181B] border ${getPillarBorder(
            activePillar.accentColor
          )} shadow-2xl relative overflow-hidden transition-all duration-300`}
        >
          {/* Top Banner inside Pillar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-gray-300 mb-3">
                <span>PILAR {activePillar.pillarNumber}</span>
                <span>•</span>
                <span className="capitalize">{activePillar.accentColor} Focus</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {activePillar.title}
              </h3>
              <p className="text-[#00FFFF] text-sm sm:text-base font-medium">
                {activePillar.tagline}
              </p>
              <p className="text-gray-300 text-sm mt-2 max-w-2xl">
                {activePillar.description}
              </p>
            </div>

            <a
              href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                `Olá João! Gostaria de conversar sobre os serviços do Pilar de ${activePillar.title} da Arte do Algoritmo.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all duration-200 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#00FFFF]" />
              <span>Solicitar Orçamento deste Pilar</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Service Cards Grid inside this pillar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePillar.services.map((service, index) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {service.name}
                    </h4>
                    <span className="text-xs font-mono text-gray-400">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-mono">
                    Entrega profissional
                  </span>
                  <a
                    href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Olá! Tenho interesse no serviço de ${service.name} da Arte do Algoritmo.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#00FFFF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Quero este serviço</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
