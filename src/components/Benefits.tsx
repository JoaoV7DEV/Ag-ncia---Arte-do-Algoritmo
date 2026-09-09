import React from 'react';
import { BENEFITS } from '../data/agencyData';
import { Palette, Rocket, CheckCircle2, MessageSquareText } from 'lucide-react';

export const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#E71870]" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#00FFFF]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#38BDF8]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#A855F7]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#00FFFF]" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-[#18181B] border-y border-white/5 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#00FFFF] font-mono font-semibold">
            Por que escolher a Arte do Algoritmo
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
            Menos promessas vazias, mais foco no que realmente funciona
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Não somos uma fábrica de templates sem alma nem vendemos complexidade desnecessária. Construímos soluções digitais completas para quem precisa crescer com segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              id={`benefit-card-${benefit.id}`}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    0{index + 1}
                  </span>
                </div>

                <span className="inline-block text-xs font-medium text-gray-400 mb-2">
                  {benefit.badge}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#E71870] opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />
                <span className="text-[11px] font-medium text-gray-400">Compromisso real</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
