import React, { useState } from 'react';
import { WEBSITE_GALLERY, AGENCY_INFO } from '../data/agencyData';
import { WebsiteProject } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Eye,
  Maximize2,
  MousePointer,
  MessageCircle,
  Sparkles,
  ArrowDown,
} from 'lucide-react';

export const WebsiteGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [selectedProject, setSelectedProject] = useState<WebsiteProject | null>(null);
  const [scrollingCardId, setScrollingCardId] = useState<string | null>(null);

  const categories = ['TODOS', 'SITE INSTITUCIONAL', 'LANDING PAGE'];

  const filteredProjects =
    selectedCategory === 'TODOS'
      ? WEBSITE_GALLERY
      : WEBSITE_GALLERY.filter((p) => p.category === selectedCategory);

  const toggleScrollMobile = (id: string) => {
    setScrollingCardId(scrollingCardId === id ? null : id);
  };

  return (
    <section id="portfolio-web" className="py-24 bg-[#272727] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#00FFFF] font-mono font-semibold">
            Galeria de Sites & Páginas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
            Projetos desenvolvidos com foco em conversão e autoridade
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Passe o cursor sobre os projetos para rolar e visualizar a estrutura completa da página de cima a baixo.
          </p>

          {/* Interactive Hint */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 mt-4 font-mono">
            <MousePointer className="w-3.5 h-3.5 animate-bounce" />
            <span>Passe o mouse no card para rolar a página verticalmente</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00FFFF] text-[#18181B] shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isMobileScrolled = scrollingCardId === project.id;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-[#18181B] border border-white/10 hover:border-[#00FFFF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Browser Bar Mockup */}
                <div className="px-4 py-2.5 bg-[#121214] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[11px] text-gray-400 truncate max-w-[170px]">
                    {project.id}.com.br
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase">
                    {project.category === 'LANDING PAGE' ? 'LP' : 'SITE'}
                  </span>
                </div>

                {/* Simulated Long Web Page Viewport with Interactive Smooth Vertical Scroll on Hover */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-black/40 cursor-pointer">
                  {/* The long scrollable page container */}
                  <div
                    className={`w-full transition-transform duration-[6500ms] ease-in-out transform ${
                      isMobileScrolled
                        ? '-translate-y-[58%]'
                        : 'group-hover:-translate-y-[58%]'
                    }`}
                    style={{ backgroundColor: project.fullHeightPreview.themeColor }}
                  >
                    {/* Simulated Header */}
                    <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/30">
                      <span className="font-bold text-xs text-white tracking-wider">
                        {project.title}
                      </span>
                      <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>Início</span>
                        <span>Sobre</span>
                        <span>Serviços</span>
                        <span
                          className="px-2 py-0.5 rounded text-black font-bold"
                          style={{ backgroundColor: project.fullHeightPreview.accentColor }}
                        >
                          Contato
                        </span>
                      </div>
                    </div>

                    {/* Simulated Hero Section */}
                    <div className="p-6 text-left border-b border-white/10 min-h-[190px] flex flex-col justify-center">
                      <span
                        className="text-[10px] font-mono font-bold tracking-wider uppercase mb-1"
                        style={{ color: project.fullHeightPreview.accentColor }}
                      >
                        {project.niche}
                      </span>
                      <h4 className="text-base font-extrabold text-white leading-tight mb-2">
                        {project.fullHeightPreview.heroHeading}
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                        {project.fullHeightPreview.heroSub}
                      </p>
                      <div className="flex gap-2">
                        <span
                          className="px-3 py-1 rounded-md text-[10px] font-bold text-black"
                          style={{ backgroundColor: project.fullHeightPreview.accentColor }}
                        >
                          Fale Conosco
                        </span>
                        <span className="px-3 py-1 rounded-md text-[10px] bg-white/10 text-white font-medium">
                          Saiba Mais
                        </span>
                      </div>
                    </div>

                    {/* Simulated Middle Sections */}
                    <div className="p-6 space-y-4 border-b border-white/10 bg-black/20">
                      <p
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: project.fullHeightPreview.accentColor }}
                      >
                        Diferenciais & Soluções
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        {project.fullHeightPreview.sections[0]?.items?.map((item, i) => (
                          <div key={i} className="p-2 rounded bg-white/5 text-gray-300">
                            {item}
                          </div>
                        )) || (
                          <>
                            <div className="p-2 rounded bg-white/5 text-gray-300">Atendimento Especializado</div>
                            <div className="p-2 rounded bg-white/5 text-gray-300">Estrutura de Alta Performance</div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Simulated Social Proof & Reviews */}
                    <div className="p-6 border-b border-white/10 bg-black/40">
                      <p className="text-[10px] font-mono text-gray-400 mb-2">Depoimentos Verificados</p>
                      <div className="p-3 rounded bg-white/5 text-xs text-gray-300 italic">
                        &ldquo;Excelente atendimento e rapidez no serviço prestado.&rdquo;
                      </div>
                    </div>

                    {/* Simulated Footer */}
                    <div className="p-6 bg-black/70 text-center">
                      <p className="text-xs font-bold text-white mb-1">{project.title}</p>
                      <p className="text-[10px] text-gray-400">
                        Atendimento online e presencial • Salvador / Bahia
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay Hint for Desktop & Mobile Toggle */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                    {/* Mobile toggle button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleScrollMobile(project.id);
                      }}
                      className="md:hidden px-2.5 py-1 rounded-lg bg-black/70 text-[10px] font-mono text-cyan-300 border border-white/10 backdrop-blur-sm"
                    >
                      {isMobileScrolled ? 'Voltar' : 'Rolar'}
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-gray-300 hover:text-white border border-white/10 backdrop-blur-sm"
                      title="Ver detalhes"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-semibold text-[#00FFFF]">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">{project.niche}</p>

                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00FFFF]" />
                      <span>Ver Estrutura</span>
                    </button>

                    <a
                      href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                        `Olá João! Gostaria de fazer um site com o padrão de ${project.title} (${project.niche}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#00FFFF] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Cotar Semelhante</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
