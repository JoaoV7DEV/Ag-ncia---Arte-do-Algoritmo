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

type PageView = 'home' | 'projetos' | 'sobre';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Sync state with URL hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#projetos')) {
        setCurrentPage('projetos');
      } else if (hash.startsWith('#sobre')) {
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
            <FeaturedProjectsPreview onViewAllProjects={() => handleNavigate('projetos')} />

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

        {currentPage === 'projetos' && <ProjectsPage />}

        {currentPage === 'sobre' && <AboutPage />}
      </main>

      {/* Footer with simplified navigation groups */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
