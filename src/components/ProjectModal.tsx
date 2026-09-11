import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';
import { Project } from '../types';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Reset back to the first screenshot whenever a different project is opened
  useEffect(() => {
    setActiveImage(0);
  }, [project?.id]);

  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultipleImages = gallery.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0d1424] border border-[#1e2f4f] rounded-3xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1b2742] bg-[#0a0f1c]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Project Details"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#16213b] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Project Image Banner / Screenshot Gallery */}
          <div>
            <div className="rounded-2xl border border-[#1f2d47] overflow-hidden bg-[#070b13] aspect-[16/9] relative shadow-lg">
              <img
                src={gallery[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnail Strip */}
            {hasMultipleImages && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View screenshot ${i + 1}`}
                    className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                      i === activeImage ? 'border-blue-500' : 'border-[#1f2d47] hover:border-[#2b3e64]'
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Features Section */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Architectural & Functional Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#11192d] border border-[#1d2b48]"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-blue-400 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Technology Stack
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121b2d] border border-[#203152] text-xs font-medium text-white"
                >
                  <TechIcon name={tech} className="w-4 h-4" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#1a2640] flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
