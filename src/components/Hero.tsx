import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, ArrowRight, MapPin, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onViewProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center justify-center bg-[#272727] overflow-hidden"
    >
      {/* Background Graphic Accents */}
      {/* 1. Algorithmic Cyan Pixel Grid on Left */}
      <div className="absolute top-1/4 -left-16 w-96 h-96 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#00FFFF_1.5px,transparent_1.5px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Fluid Artistic Magenta Glow on Right */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-[#E71870]/20 via-[#c026d3]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* 3. Deep Top Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-cyan-500/10 via-purple-600/5 to-transparent blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* City & Badge Tag */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-xs sm:text-sm mb-8 backdrop-blur-sm shadow-inner"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
          <span>Salvador, Bahia</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400">Atendimento para todo o Brasil</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6 font-sans"
        >
          Design, tecnologia e estratégia para{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#e25fc2] to-[#E71870]">
            fortalecer sua presença digital
          </span>
          .
        </h1>

        {/* Subheadline with real value proposition */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Unimos a sensibilidade artística do design e da identidade visual com a precisão dos sistemas digitais. Criamos sites de alta performance, marcas memoráveis e soluções pensadas para gerar resultados reais para o seu negócio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12">
          {/* Primary WhatsApp CTA */}
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-primary-cta"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-extrabold text-base shadow-[0_0_30px_rgba(0,255,255,0.35)] hover:shadow-[0_0_40px_rgba(0,255,255,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Fale no WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Portfolio CTA */}
          <a
            href="#projetos"
            onClick={(e) => {
              if (onViewProjects) {
                e.preventDefault();
                onViewProjects();
              }
            }}
            id="hero-secondary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <span>Conheça nossos projetos</span>
          </a>
        </div>

        {/* Real Key Highlights & Transparency */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 border-t border-white/10 text-left">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
            <CheckCircle2 className="w-5 h-5 text-[#00FFFF] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Sites Sob Medida</p>
              <p className="text-xs text-gray-400">Páginas responsivas, rápidas e sem templates genéricos.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
            <Sparkles className="w-5 h-5 text-[#E71870] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Identidade e Marca</p>
              <p className="text-xs text-gray-400">Logos e design que comunicam autoridade imediata.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white">Acessível & Transparente</p>
              <p className="text-xs text-gray-400">Projetos a partir de R$ 500 com escopo claro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
