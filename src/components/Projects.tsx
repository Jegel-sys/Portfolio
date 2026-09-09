import React, { useState } from 'react';
import { Laptop, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

const filterCategories = ['All', 'Web Apps', 'Management Systems', 'APIs'] as const;

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'APIs') {
      return project.technologies.some(t => t.toLowerCase().includes('api') || t.toLowerCase().includes('node') || t.toLowerCase().includes('laravel'));
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="text-blue-500 font-bold">›</span> MY WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-base text-gray-400 max-w-2xl font-normal">
              Here are some of the projects I've built. Each project solves a real problem and showcases different skills and technologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#101728] text-gray-300 hover:text-white hover:bg-[#15213b] border border-[#1e2a44]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid / Stack (Matching the reference layout) */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl bg-[#0c1220]/95 border border-[#1a273f] hover:border-[#2b3e64] transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Laptop Mockup Visual */}
                <div
                  className="lg:col-span-5 cursor-pointer order-1 lg:order-1"
                  onClick={() => onSelectProject(project.id)}
                >
                  <div className="rounded-2xl border border-[#213252] bg-[#080d17] overflow-hidden shadow-xl group-hover:border-blue-500/40 transition-all duration-300">
                    {/* Browser Chrome Header */}
                    <div className="h-6 bg-[#11192b] border-b border-[#1b263e] px-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                        <Laptop className="w-2.5 h-2.5" />
                        <span>{project.category}</span>
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#060a12]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-2">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-medium">
                      Project 0{index + 1}
                    </span>
                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight cursor-pointer hover:text-blue-400 transition-colors"
                      onClick={() => onSelectProject(project.id)}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs sm:text-sm text-gray-400">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#11192c] border border-[#1e2a42] text-xs font-medium text-gray-200"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
