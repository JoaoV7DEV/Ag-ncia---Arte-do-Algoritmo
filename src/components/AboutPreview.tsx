import React from 'react';
import { ArrowRight, Sparkles, Code2, Palette, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onLearnMore }) => {
  return (
    <section id="sobre-previa" className="py-24 bg-[#272727] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Synergy Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#18181B] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
                  <span>Salvador, Bahia • Brasil</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Arte + Algoritmo
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  A sensibilidade estética do design aliada à velocidade, estrutura e precisão do código moderno.
                </p>

                {/* Pillars duality */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                  <div className="p-3.5 rounded-2xl bg-pink-950/20 border border-pink-500/20">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#E71870]" />
                      <span className="text-[10px] font-mono text-[#E71870] font-bold">
                        ARTE
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-white">Design & Emoção</p>
                    <p className="text-[11px] text-gray-400 mt-1">Identidade visual marcante, autoridade e estética única.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#00FFFF]" />
                      <span className="text-[10px] font-mono text-[#00FFFF] font-bold">
                        ALGORITMO
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-white">Código & Conversão</p>
                    <p className="text-[11px] text-gray-400 mt-1">Carregamento rápido, SEO pronto e páginas responsivas.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Atendimento humanizado</span>
                <span className="text-[#00FFFF]">100% sob medida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NOSSA ESSÊNCIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Onde o design estratégico encontra a precisão da tecnologia
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              A <strong>Arte do Algoritmo</strong> nasceu para resolver um problema comum que muitas empresas enfrentam: páginas bonitas que não vendem ou sites técnicos sem alma visual.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              Liderada por <strong>João</strong> a partir de Salvador, Bahia, entregamos a harmonia visual que encanta seu cliente somada ao código de alto desempenho preparado para o Google e otimizado para o WhatsApp.
            </p>

            {/* Quick Principles Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Sem templates prontos ou soluções genéricas</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Comunicação transparente sem jargões difíceis</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Contato direto com quem desenvolve seu projeto</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Foco permanente em retorno real para o negócio</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onLearnMore}
                id="btn-conheca-mais-sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all duration-200 group"
              >
                <span>Conheça mais sobre a Arte do Algoritmo</span>
                <ArrowRight className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-300 hover:text-white text-xs font-semibold hover:bg-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
