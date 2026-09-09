import React from 'react';
import { Layout, Server, Database, Wrench, Briefcase } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Skills: React.FC = () => {
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Layout className="w-4 h-4 text-blue-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'general':
        return <Briefcase className="w-4 h-4 text-violet-400" />;
      default:
        return <Layout className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="text-blue-500 font-bold">›</span> SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Tech Stack
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-normal">
            Technologies I work with to build modern and scalable web applications.
          </p>
        </div>

        {/* Categories Grid (2x2 on desktop matching the reference!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.categoryKey}
              id={`skill-category-${category.categoryKey}`}
              className="p-6 rounded-2xl bg-[#0c1220]/95 border border-[#1a263d] hover:border-[#253657] transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-5 border-b border-[#162035] mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#121b2d] border border-[#1f2d47] flex items-center justify-center">
                  {getCategoryIcon(category.categoryKey)}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Items Row / Grid */}
              <div className="flex flex-wrap items-center gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#101728] border border-[#1b273f] hover:border-blue-500/40 hover:bg-[#131d33] transition-all duration-200 group cursor-default shadow-xs"
                  >
                    <TechIcon name={skill.iconName || skill.name} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
