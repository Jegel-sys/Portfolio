import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import dhvsuLogo from '../assets/images/dhvsu-logo.webp';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="text-blue-500 font-bold">›</span> WORK EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-normal">
            My professional journey and the roles I've taken.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-[#1a263e] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${exp.position}`} className="relative group text-left">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#0c1220] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {idx === 0 && (
                  <span className="animate-ping absolute w-3 h-3 rounded-full bg-blue-400 opacity-60" />
                )}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1220]/90 border border-[#1a273f] hover:border-[#283b61] transition-all duration-200 shadow-sm space-y-4">
                {/* Header: Title, Company, Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#172238]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.position}
                    </h3>
                    <span className="text-sm font-medium text-blue-400">
                      {exp.company}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121a2d] border border-[#1e2a44] text-xs font-mono text-gray-300 self-start sm:self-center">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Brief description if available */}
                {exp.description && (
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {/* Responsibilities list */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                    Key Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#11182a] border border-[#1c273e] text-xs font-medium text-gray-300"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-14 pt-10 border-t border-[#162035]">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-6">
            <span className="text-blue-500 font-bold">›</span> EDUCATION
          </div>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c1220]/90 border border-[#1a273f] hover:border-[#283b61] transition-all duration-200 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-white/95 border border-[#1e2e4a] flex items-center justify-center shrink-0 p-1.5 overflow-hidden">
                  <img src={dhvsuLogo} alt={`${edu.institution} logo`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-blue-400">
                    {edu.institution}
                  </span>
                  {edu.note && (
                    <span className="block text-xs text-gray-500 italic mt-0.5">
                      {edu.note}
                    </span>
                  )}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121a2d] border border-[#1e2a44] text-xs font-mono text-gray-300 self-start sm:self-center">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  <span>{edu.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
