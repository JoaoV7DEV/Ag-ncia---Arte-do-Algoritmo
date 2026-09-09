import React from 'react';
import { WebsiteProject } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { X, ExternalLink, Check, MessageCircle, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: WebsiteProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#18181B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#272727] border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-semibold text-[#00FFFF] uppercase">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          {/* Project Details */}
          <div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Website Visual Representation (Full Page View) */}
          <div className="rounded-2xl bg-[#0F172A] border border-white/10 overflow-hidden shadow-inner">
            <div className="px-4 py-2 bg-black/40 border-b border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 text-gray-400">Visão Estrutural da Página</span>
            </div>

            <div
              className="p-6 sm:p-8 space-y-8"
              style={{ backgroundColor: project.fullHeightPreview.themeColor }}
            >
              {/* Hero inside page preview */}
              <div className="p-6 rounded-xl bg-black/30 border border-white/10">
                <span
                  className="inline-block text-[11px] font-mono px-2 py-0.5 rounded mb-2 font-bold"
                  style={{ color: project.fullHeightPreview.accentColor }}
                >
                  SEÇÃO HERO
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.fullHeightPreview.heroHeading}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  {project.fullHeightPreview.heroSub}
                </p>
              </div>

              {/* Sections list inside preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.fullHeightPreview.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/25 border border-white/5"
                  >
                    <span
                      className="text-[10px] font-mono uppercase font-bold block mb-1"
                      style={{ color: project.fullHeightPreview.accentColor }}
                    >
                      {sec.type}
                    </span>
                    <p className="text-sm font-bold text-white mb-1">{sec.title}</p>
                    {sec.description && (
                      <p className="text-xs text-gray-400 mb-2">{sec.description}</p>
                    )}
                    {sec.items && (
                      <ul className="space-y-1 text-xs text-gray-300">
                        {sec.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: project.fullHeightPreview.accentColor }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#272727] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400">
            <span>Cliente: <strong className="text-white">{project.client}</strong></span>
            <span className="mx-2">•</span>
            <span>Nicho: <strong className="text-white">{project.niche}</strong></span>
          </div>

          <a
            href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
              `Olá João! Gostei muito do projeto de ${project.title} (${project.niche}) e gostaria de um site semelhante para minha empresa.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-sm shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero um site neste estilo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
