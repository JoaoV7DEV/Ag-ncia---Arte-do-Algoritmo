import React from 'react';
import { REAL_TESTIMONIALS } from '../data/agencyData';
import { CheckCheck, MessageSquare, ShieldCheck, Heart, FileText } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#272727] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MENSAGENS REAIS DE CLIENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A satisfação de quem confiou na Arte do Algoritmo
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
            Sem depoimentos fabricados ou números inventados. Confira as conversas e feedbacks espontâneos de clientes e parceiros após a entrega de seus projetos.
          </p>
        </div>

        {/* WhatsApp Chat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#18181B] border border-white/10 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* WhatsApp Header Mockup */}
              <div className="px-5 py-3.5 bg-[#0F1C15] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-black text-xs shadow-md">
                    {t.avatarText}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                      <span>{t.clientName}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </p>
                    <p className="text-[11px] text-gray-400">{t.role} • {t.project}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>

              {/* Chat Body Bubble */}
              <div className="p-6 bg-gradient-to-b from-[#111B15]/40 to-transparent flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-mono text-gray-400 mb-3 italic">
                    {t.context}
                  </p>

                  {/* Attachment if present (e.g. Comprovante Sicredi) */}
                  {t.attachmentName && (
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 mb-4 text-xs text-gray-300">
                      <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{t.attachmentName}</span>
                    </div>
                  )}

                  {/* Message Bubble (WhatsApp style green balloon) */}
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-[#005c4b]/30 border border-[#00a884]/30 shadow-md text-gray-100 text-sm leading-relaxed relative">
                    <p className="whitespace-pre-line">&ldquo;{t.messageText}&rdquo;</p>
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-emerald-300 font-mono">
                      <span>{t.time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-mono text-[11px]">Projeto: {t.project}</span>
                  <span className="text-emerald-400 font-medium">Cliente real</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
