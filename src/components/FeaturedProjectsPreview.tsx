import React from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface FeaturedProjectsPreviewProps {
  onViewAllProjects: () => void;
}

export const FeaturedProjectsPreview: React.FC<FeaturedProjectsPreviewProps> = ({
  onViewAllProjects,
}) => {
  return (
    <section id="projetos-destaque" className="py-24 bg-[#18181B] border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFÓLIO SELECIONADO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos em Destaque
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Uma amostra prática da nossa capacidade de unir estética de alto nível, tecnologia responsiva e foco em conversão.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            id="btn-ver-todos-projetos-top"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200 group self-start md:self-auto"
          >
            <span>Ver todos os projetos</span>
            <ArrowRight className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Card 1: 01S Mobilidade (Flagship) */}
          <div className="group rounded-3xl bg-[#272727] border border-emerald-500/30 hover:border-emerald-500/60 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Project Visual Header */}
              <div className="relative h-56 bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-black p-6 flex flex-col justify-between overflow-hidden border-b border-white/10">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    PROJETO REAL
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                    2026 • Salvador BA
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider block mb-1">
                    Plataforma Web & Rebranding
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    01S Mobilidade
                  </h3>
                </div>

                {/* Subtle graphic badge */}
                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Transformação digital completa da antiga MOB3L: nova identidade visual com logotipo moderno, plataforma web rápida com jornadas exclusivas para passageiros e motoristas parceiros.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Portal web com taxas zero nos primeiros 30 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Download direto e rotas de captação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Identidade visual corporativa completa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onViewAllProjects}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-white hover:text-emerald-300 font-semibold text-xs border border-white/10 hover:border-emerald-500/30 transition-all flex items-center justify-center gap-2 group-hover:bg-emerald-500/10"
              >
                <span>Explorar case completo</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 2: Dra. Camila Valente - Web Design */}
          <div className="group rounded-3xl bg-[#272727] border border-cyan-500/20 hover:border-cyan-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Project Visual Header */}
              <div className="relative h-56 bg-gradient-to-br from-cyan-950/60 via-zinc-900 to-black p-6 flex flex-col justify-between overflow-hidden border-b border-white/10">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    SITE INSTITUCIONAL
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                    Saúde & Estética
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-xs text-[#00FFFF] font-mono font-semibold uppercase tracking-wider block mb-1">
                    Alta Conversão
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Dra. Camila Valente
                  </h3>
                </div>

                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Landing page premium para clínica de biomedicina estética avançada. Carregamento instantâneo no celular, tipografia elegante e agendamento de consultas via WhatsApp.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
                    <span>Página 100% responsiva para smartphones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
                    <span>Apresentação clara de procedimentos e equipe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
                    <span>Integração de CTA de alta conversão</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onViewAllProjects}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-white hover:text-cyan-300 font-semibold text-xs border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 group-hover:bg-cyan-500/10"
              >
                <span>Ver detalhes do projeto</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 3: Instituto Bahia de Psicologia - Branding & Design */}
          <div className="group rounded-3xl bg-[#272727] border border-pink-500/20 hover:border-pink-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              {/* Project Visual Header */}
              <div className="relative h-56 bg-gradient-to-br from-pink-950/60 via-zinc-900 to-black p-6 flex flex-col justify-between overflow-hidden border-b border-white/10">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 font-mono text-[11px] font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    BRANDING & DESIGN
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-0.5 rounded">
                    Identidade Visual
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-xs text-[#E71870] font-mono font-semibold uppercase tracking-wider block mb-1">
                    Manual de Marca
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Instituto Bahia de Psicologia
                  </h3>
                </div>

                <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Construção de marca completa: logotipo humanizado com paleta cromática acolhedora, diretrizes tipográficas, cartões digitais interativos e templates para comunicação médica.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E71870] shrink-0" />
                    <span>Conceito visual de acolhimento e autoridade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E71870] shrink-0" />
                    <span>Manual de uso e aplicações de marca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E71870] shrink-0" />
                    <span>Materiais prontos para redes sociais e impressão</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={onViewAllProjects}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-pink-500/20 text-white hover:text-pink-300 font-semibold text-xs border border-white/10 hover:border-pink-500/30 transition-all flex items-center justify-center gap-2 group-hover:bg-pink-500/10"
              >
                <span>Ver projetos de branding</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Bottom Call to Action */}
        <div className="text-center">
          <button
            onClick={onViewAllProjects}
            id="btn-ver-todos-projetos-bottom"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Ver todos os projetos no portfólio completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
