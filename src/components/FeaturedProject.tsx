import React from 'react';
import { ArrowRight, Check, Laptop, Smartphone } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface FeaturedProjectProps {
  onSelectProject: (id: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onSelectProject }) => {
  return (
    <section id="featured-project" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6">
          <span className="text-blue-500 font-bold">›</span> FEATURED PROJECT
        </div>

        {/* Main Card Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1526]/90 to-[#0a0f1b]/95 border border-[#1d2a45] shadow-2xl p-6 sm:p-8 lg:p-12 overflow-hidden relative">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-medium">
                  {featuredProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {featuredProject.title}
                </h3>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {featuredProject.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                  Key Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-200">
                  {featuredProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-400 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                  Technologies Used
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121b2d] border border-[#1f2d47] text-xs font-medium text-gray-200"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectProject(featuredProject.id)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Column: Multi-device presentation mockup */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[540px] group cursor-pointer" onClick={() => onSelectProject(featuredProject.id)}>
                {/* Laptop Mockup Wrapper */}
                <div className="rounded-2xl border border-[#223354] bg-[#0c1220] shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.015]">
                  {/* Screenshot Display */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#060a12]">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1b]/50 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0a0f1b]/80 backdrop-blur-md border border-[#203152] text-[11px] text-blue-400 font-mono flex items-center gap-1">
                      <Laptop className="w-3 h-3" /> Live Demo Ready
                    </div>
                  </div>
                </div>

                {/* Overlapping Phone Mockup (as seen in the reference visual!) */}
                <div className="hidden sm:block absolute -bottom-4 -right-3 w-36 aspect-[9/18] rounded-2xl border-2 border-[#2b3d63] bg-[#0c1220] shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="h-3 bg-[#131b2d] flex justify-center items-center">
                    <div className="w-8 h-1 rounded-full bg-gray-600" />
                  </div>
                  <img
                    src={featuredProject.image}
                    alt="Mobile View"
                    className="w-full h-full object-cover object-left"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
