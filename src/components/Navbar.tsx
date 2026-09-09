import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: 'home' | 'projetos' | 'sobre';
  onNavigate: (page: 'home' | 'projetos' | 'sobre', anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: string; label: string; page: 'home' | 'projetos' | 'sobre'; anchor?: string }[] = [
    { id: 'nav-home', label: 'Início', page: 'home', anchor: 'inicio' },
    { id: 'nav-servicos', label: 'Serviços', page: 'home', anchor: 'servicos' },
    { id: 'nav-projetos', label: 'Projetos', page: 'projetos' },
    { id: 'nav-sobre', label: 'Sobre', page: 'sobre' },
  ];

  const handleItemClick = (page: 'home' | 'projetos' | 'sobre', anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#18181B]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-[#272727]/90 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: Official Arte do Algoritmo logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick('home', 'inicio');
          }}
          id="nav-logo-link"
          className="flex items-center group transition-transform hover:opacity-95"
          title="Arte do Algoritmo - Início"
        >
          <Logo id="nav-logo-image" size="md" />
        </a>

        {/* CENTER: Clean single-line desktop navigation links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive =
              (item.page === 'projetos' && currentPage === 'projetos') ||
              (item.page === 'sobre' && currentPage === 'sobre') ||
              (item.page === 'home' && !item.anchor && currentPage === 'home') ||
              (item.id === 'nav-home' && currentPage === 'home');

            return (
              <button
                key={item.id}
                id={item.id}
                type="button"
                onClick={() => handleItemClick(item.page, item.anchor)}
                className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Subtle Cyan Brand CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Fale no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="md:hidden p-2 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181B] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={`mobile-${item.id}`}
              type="button"
              onClick={() => handleItemClick(item.page, item.anchor)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-white/10">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
