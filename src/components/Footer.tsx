import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, Instagram, Facebook, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (page: 'home' | 'projetos' | 'sobre', anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: 'home' | 'projetos' | 'sobre', anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    } else {
      if (page === 'home') {
        if (anchor) {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          scrollToTop();
        }
      }
    }
  };

  return (
    <footer className="bg-[#121214] border-t border-white/10 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand and Location */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLinkClick('home', 'inicio')}
              className="inline-block transition-transform hover:opacity-95 text-left"
              title="Arte do Algoritmo"
            >
              <Logo id="footer-logo-image" size="lg" />
            </button>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Design, tecnologia e estratégia para fortalecer sua presença digital. Desenvolvimento de sites sob medida, identidades visuais memoráveis e foco em resultados reais.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span>{AGENCY_INFO.city}, {AGENCY_INFO.state} • Atendimento para todo o Brasil</span>
            </div>
          </div>

          {/* Group 1: NAVEGAÇÃO */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'inicio')}
                  className="hover:text-white transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('projetos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('sobre')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* Group 2: SERVIÇOS */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Serviços
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Desenvolvimento Web
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Landing Pages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Identidade Visual
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Google Meu Negócio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Design para Redes Sociais
                </button>
              </li>
            </ul>
          </div>

          {/* Group 3: CONTATO */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Contato
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#00FFFF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{AGENCY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#E71870] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E71870]" />
                  <span>{AGENCY_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00FFFF] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#00FFFF]" />
                  <span>{AGENCY_INFO.facebookHandle}</span>
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Arte do Algoritmo. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com carinho e precisão em Salvador, Bahia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
