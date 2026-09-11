import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'Email':
        return <Mail className="w-4 h-4" />;
      case 'Messenger':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-[#141c2e]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/8 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111827]/90 border border-[#1f2d47] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-200">
                Hi, I'm <span className="font-semibold text-blue-500">{personalInfo.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.1]">
                {personalInfo.title}
              </h1>
            </div>

            {/* Subtitle / Short Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-normal">
              {personalInfo.bioShort}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-cta-work"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gray-300 hover:text-white bg-[#101726] hover:bg-[#152035] border border-[#21304d] hover:border-[#2d426a] transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.platform}
                  id={`hero-social-${item.platform.toLowerCase()}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-[#101728] border border-[#1e2a44] text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-[#15223c] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  {getSocialIcon(item.platform)}
                </a>
              ))}
              <span className="text-xs text-gray-500 ml-2 font-mono">
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column: Developer Visual Area with Floating Tech Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Wrapper */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] sm:aspect-square flex items-center justify-center">
              {/* Outer Decorative Tech Ring */}
              <div className="absolute inset-0 rounded-3xl border border-[#1b263e] bg-gradient-to-b from-[#131c30]/60 to-[#0c1220]/80 shadow-2xl backdrop-blur-sm -z-10" />
              <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-500/20 blur-sm -z-10" />

              {/* Developer Portrait */}
              <div className="relative w-[85%] h-[85%] rounded-2xl overflow-hidden border border-[#223354] shadow-2xl bg-[#0b101c]">
                <img
                  src={personalInfo.portrait}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
                
                {/* Embedded subtle badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0c1322]/85 backdrop-blur-md border border-[#1e2e4e] py-1.5 px-3 rounded-xl flex items-center justify-between text-xs text-gray-300">
                  <span className="font-medium text-white">{personalInfo.name}</span>
                  <span className="text-[11px] text-blue-400 font-mono">Full-Stack Dev</span>
                </div>
              </div>

              {/* Floating Tech Chips (Matching the uploaded reference layout!) */}
              {/* React Badge */}
              <div className="absolute -right-3 top-10 sm:right-[-12px] sm:top-14 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 border border-[#1e3052] shadow-xl backdrop-blur-md hover:border-cyan-400/60 transition-all hover:scale-105">
                <TechIcon name="React" className="w-4 h-4" />
                <span className="text-xs font-semibold text-gray-200">React</span>
              </div>

              {/* Node.js Badge */}
              <div className="absolute -right-4 top-28 sm:right-[-16px] sm:top-32 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 border border-[#1e3052] shadow-xl backdrop-blur-md hover:border-green-500/60 transition-all hover:scale-105">
                <TechIcon name="Node.js" className="w-4 h-4" />
                <span className="text-xs font-semibold text-gray-200">Node.js</span>
              </div>

              {/* Express.js Badge */}
              <div className="absolute -right-3 top-46 sm:right-[-12px] sm:top-50 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 border border-[#1e3052] shadow-xl backdrop-blur-md hover:border-gray-400/60 transition-all hover:scale-105">
                <TechIcon name="Express.js" className="w-4 h-4" />
                <span className="text-xs font-semibold text-gray-200">Express.js</span>
              </div>

              {/* MySQL Badge */}
              <div className="absolute -right-4 bottom-10 sm:right-[-14px] sm:bottom-14 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f172a]/95 border border-[#1e3052] shadow-xl backdrop-blur-md hover:border-amber-500/60 transition-all hover:scale-105">
                <TechIcon name="MySQL" className="w-4 h-4" />
                <span className="text-xs font-semibold text-gray-200">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
