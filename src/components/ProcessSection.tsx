import React from 'react';
import { MessageSquare, Compass, Palette, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

const CONCISE_STEPS = [
  {
    number: 1,
    title: 'Conversa Inicial',
    icon: MessageSquare,
    color: 'text-[#00FFFF]',
    borderColor: 'border-[#00FFFF]/20',
    description: 'Alinhamos os objetivos do seu negócio, público-alvo, prazos e definimos o escopo exato do projeto.',
    highlight: 'Diagnóstico transparente e sem jargões'
  },
  {
    number: 2,
    title: 'Estratégia',
    icon: Compass,
    color: 'text-[#38BDF8]',
    borderColor: 'border-[#38BDF8]/20',
    description: 'Planejamos a arquitetura do site ou o posicionamento da marca para guiar o visitante até a conversão.',
    highlight: 'Estrutura pensada para vender'
  },
  {
    number: 3,
    title: 'Criação',
    icon: Palette,
    color: 'text-[#E71870]',
    borderColor: 'border-[#E71870]/20',
    description: 'Desenvolvemos a direção visual com paleta, tipografia e layouts para aprovação prévia com você.',
    highlight: 'Design exclusivo e memorável'
  },
  {
    number: 4,
    title: 'Desenvolvimento',
    icon: Code,
    color: 'text-[#A855F7]',
    borderColor: 'border-[#A855F7]/20',
    description: 'Programamos o site com tecnologia moderna, carregamento ultrarrápido e integração total com o WhatsApp.',
    highlight: 'Código limpo e 100% responsivo'
  },
  {
    number: 5,
    title: 'Entrega',
    icon: CheckCircle,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    description: 'Publicamos seu site no domínio oficial, homologamos tudo e damos suporte para sua empresa decolar.',
    highlight: 'Presença no ar com suporte contínuo'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-[#18181B] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#00FFFF] font-mono font-semibold">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
            Processo transparente em 5 etapas claras
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Metodologia organizada para você acompanhar cada avanço sem surpresas e com contato direto pelo WhatsApp.
          </p>
        </div>

        {/* 5 Steps Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CONCISE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#00FFFF] group-hover:scale-105 transition-transform">
                      0{step.number}
                    </span>
                    <div className={`p-2 rounded-lg bg-white/5 ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[11px] font-medium text-gray-400 block">
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
