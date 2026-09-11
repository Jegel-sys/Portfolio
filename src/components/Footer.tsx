import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-[#070a12] border-t border-[#131b2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white tracking-wider text-base shadow-md shadow-blue-600/20">
              {personalInfo.initials}
            </div>
            <div className="text-left">
              <span className="block text-sm font-semibold text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="block text-xs text-gray-400 font-normal">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-400">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>© 2026 {personalInfo.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg bg-[#111828] border border-[#1d2942] hover:border-blue-500/50 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
