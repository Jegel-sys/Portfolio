import React, { useEffect, useState } from 'react';
import { ArrowRight, Lightbulb, BookOpen, Users, Check, Download } from 'lucide-react';
import { personalInfo, aboutHighlights, statistics } from '../data/portfolioData';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  const getHighlightIcon = (title: string) => {
    switch (title) {
      case 'Problem Solver':
        return <Lightbulb className="w-5 h-5 text-blue-400" />;
      case 'Continuous Learner':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case 'Team Player':
        return <Users className="w-5 h-5 text-indigo-400" />;
      default:
        return <Check className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="text-blue-500 font-bold">›</span> ABOUT ME
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Turning ideas into functional web solutions.
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {personalInfo.bioLong}
              </p>
              <p className="text-sm sm:text-base text-gray-400/90">
                Specializing in building robust web applications with contemporary tooling—including React, Tailwind CSS, Node.js, Express.js, EJS, and MySQL. From database querying to fluid client interactions, I take pride in clean code, scalable architecture, and maintainable systems.
              </p>
            </div>

            {/* More About Me / Resume Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="about-more-btn"
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#111828] hover:bg-[#162238] border border-[#213252] hover:border-blue-500/40 transition-all duration-200 cursor-pointer group"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <a
                id="about-resume-view-btn"
                href="/resume/Jegel-Cabuso-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-blue-400 hover:text-blue-300 bg-transparent hover:bg-[#111828] border border-[#213252] hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>View Resume</span>
              </a>

              <a
                id="about-resume-download-btn"
                href="/resume/Jegel-Cabuso-Resume.pdf"
                download="Jegel-Cabuso-Resume.pdf"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white bg-[#111828] hover:bg-[#162238] border border-[#213252] hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
                aria-label="Download Resume"
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#0c1220]/90 border border-[#1b273f] hover:border-[#2a3d63] transition-all duration-200 hover:-translate-y-0.5 flex items-start gap-4 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#131c30] border border-[#223354] flex items-center justify-center shrink-0 mt-0.5">
                  {getHighlightIcon(item.title)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Row Below */}
        <div className="mt-16 pt-10 border-t border-[#162035]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {statistics.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-4 ${
                  idx !== statistics.length - 1 ? 'md:border-r md:border-[#1a253e]' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium max-w-[140px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Biography Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0d1424] border border-[#1e2f4f] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1b2844]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Professional Profile</span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{personalInfo.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#15213b]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated Web Developer with hands-on expertise building enterprise management software, custom client portals, and dynamic web platforms. My engineering background spans both relational database work with MySQL and interactive interfaces with React and Tailwind CSS.
              </p>
              <p>
                My engineering philosophy centers on simplicity, code reliability, and intuitive UX. Whether developing a multi-branch restaurant management platform, streamlining property listings for real estate firms, or building backend systems with Node.js and Express.js, I write clean, documented, maintainable code.
              </p>
              <div className="p-4 rounded-xl bg-[#11192d] border border-[#1d2a45] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Key Competencies</span>
                <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Full-Stack System Architecture</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Relational Database Normalization</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> RESTful API Engineering</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Responsive UI & Micro-interactions</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  const contactEl = document.getElementById('contact');
                  contactEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Contact Jegel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
