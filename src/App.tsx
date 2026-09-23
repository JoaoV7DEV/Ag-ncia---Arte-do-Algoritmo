/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectsPreview } from './components/FeaturedProjectsPreview';
import { AboutPreview } from './components/AboutPreview';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectsPage } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { Mob3lCasePage } from './components/Mob3lCasePage';
import { ZeroOneCasePage } from './components/ZeroOneCasePage';
import { PageView } from './components/Navbar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Sync document title and SEO meta description on page change
  useEffect(() => {
    let pageTitle = 'Arte do Algoritmo | Design e Estratégia Digital';
    let pageDesc = 'Criação de sites de alta performance, identidades visuais marcantes e presença digital estratégica em Salvador, Bahia. Atendimento para todo o Brasil.';

    if (currentPage === 'projetos') {
      pageTitle = 'Portfólio de Projetos | Arte do Algoritmo';
      pageDesc = 'Conheça cases reais de desenvolvimento de sites e identidades visuais criados pela Arte do Algoritmo com foco em autoridade e resultados.';
    } else if (currentPage === 'sobre') {
      pageTitle = 'Sobre a Agência | Arte do Algoritmo';
      pageDesc = 'Saiba quem somos, nossa metodologia e como unimos precisão técnica, design marcante e compromisso com o crescimento do seu negócio.';
    } else if (currentPage === 'projeto-mob3l') {
      pageTitle = 'Case MOB3L • Identidade, Site e Comunicação | Arte do Algoritmo';
      pageDesc = 'Case completo de desenvolvimento para a MOB3L: site institucional, identidade visual, papelaria, outdoor e estratégia para redes sociais em Três Lagoas/MS.';
    } else if (currentPage === 'projeto-01s') {
      pageTitle = 'Case 01S Mobilidade • Rebranding, Plataforma Web e Identidade | Arte do Algoritmo';
      pageDesc = 'Case completo de desenvolvimento para a 01S Mobilidade Urbana: identidade visual, plataforma web institucional, materiais físicos e presença digital estratégica.';
    }

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);
  }, [currentPage]);

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (
        hash.startsWith('#projetos/01s') ||
        hash === '#01s' ||
        hash === '#01s-mobilidade' ||
        path === '/projetos/01s-mobilidade' ||
        path === '/projetos/01s' ||
        hash.startsWith('#secao-01s-')
      ) {
        setCurrentPage('projeto-01s');
        if (hash.startsWith('#secao-01s-')) {
          const sectionId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      } else if (
        hash.startsWith('#projetos/mob3l') ||
        hash === '#mob3l' ||
        path === '/projetos/mob3l' ||
        hash.startsWith('#secao-') ||
        hash.startsWith('#bloco-')
      ) {
        setCurrentPage('projeto-mob3l');
        if (hash.startsWith('#secao-')) {
          const sectionId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      } else if (hash.startsWith('#projetos') || hash.startsWith('#portfolio') || path === '/projetos') {
        setCurrentPage('projetos');
      } else if (hash.startsWith('#sobre') || path === '/sobre') {
        setCurrentPage('sobre');
      } else {
        setCurrentPage('home');
        if (hash === '#servicos') {
          setTimeout(() => {
            const el = document.getElementById('servicos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: PageView, anchor?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (anchor) {
        window.location.hash = `#${anchor}`;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.location.hash = '#inicio';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'projetos') {
      window.location.hash = '#projetos';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'sobre') {
      window.location.hash = '#sobre';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'projeto-mob3l') {
      window.location.hash = '#projetos/mob3l';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'projeto-01s') {
      if (anchor) {
        window.location.hash = `#${anchor}`;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '#projetos/01s-mobilidade';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#272727] text-white flex flex-col selection:bg-[#E71870] selection:text-white">
      {/* Top Header with clean navigation: Início, Serviços, Projetos, Sobre + CTA */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. HERO */}
            <Hero onViewProjects={() => handleNavigate('projetos')} />

            {/* 2. BENEFITS / DIFFERENTIATORS */}
            <Benefits />

            {/* 3. SERVICES (3 Strategic Pillars) */}
            <ServicesSection />

            {/* 4. FEATURED PROJECTS PREVIEW (2-3 items + CTA to dedicated page) */}
            <FeaturedProjectsPreview
              onViewAllProjects={() => handleNavigate('projetos')}
              onViewMob3lCase={() => handleNavigate('projeto-mob3l')}
              onView01sCase={() => handleNavigate('projeto-01s')}
            />

            {/* 5. ABOUT PREVIEW (Concise agency intro + CTA to dedicated page) */}
            <AboutPreview onLearnMore={() => handleNavigate('sobre')} />

            {/* 6. PROCESS (Concise 5-step overview) */}
            <ProcessSection />

            {/* 7. SOCIAL PROOF (Real client testimonials) */}
            <TestimonialsSection />

            {/* 8. FINAL CTA */}
            <FinalCta />
          </>
        )}

        {currentPage === 'projetos' && <ProjectsPage onNavigate={handleNavigate} />}

        {currentPage === 'sobre' && <AboutPage />}

        {currentPage === 'projeto-mob3l' && <Mob3lCasePage onNavigate={handleNavigate} />}

        {currentPage === 'projeto-01s' && <ZeroOneCasePage onNavigate={handleNavigate} />}
      </main>

      {/* Footer with simplified navigation groups */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
