import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, ArrowRight, ShieldCheck, Instagram, Facebook, Sparkles, MapPin } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#18181B] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#00FFFF]/15 via-[#9333EA]/10 to-[#E71870]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VAMOS CONSTRUIR SUA PRÓXIMA FASE DIGITAL?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Vamos transformar sua ideia em uma presença digital que faz sentido para o seu negócio.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Seja para criar um site sob medida, reformular sua identidade visual ou lançar uma página de alta conversão. Fale diretamente no WhatsApp e receba um atendimento transparente.
          </p>

          {/* Pricing Highlight Box */}
          <div className="inline-block px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-gray-300 font-medium mb-10">
            <span className="text-emerald-400 font-bold">Investimento acessível: </span>
            {AGENCY_INFO.pricingNote}
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-extrabold text-base shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 hover:scale-105 active:scale-100"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Details & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00FFFF]" />
              <span>{AGENCY_INFO.locationDisplay}</span>
            </div>

            <span>•</span>

            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#E71870] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>{AGENCY_INFO.instagramHandle}</span>
            </a>

            <span>•</span>

            <a
              href={AGENCY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00FFFF] transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>{AGENCY_INFO.facebookHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
