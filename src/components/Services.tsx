import React from 'react';
import { Code2, Layers, Briefcase, Building, Cpu, Database } from 'lucide-react';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'building':
        return <Building className="w-5 h-5 text-blue-400" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="text-blue-500 font-bold">›</span> WHAT I CAN DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Services
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-normal">
            I offer a range of development services to help bring your ideas to life.
          </p>
        </div>

        {/* 6 Minimalist Cards (3x2 grid on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#0c1220]/90 border border-[#1a273f] hover:border-[#273a5f] transition-all duration-200 hover:-translate-y-0.5 space-y-3.5 text-left group shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[#121b2d] border border-[#1e2e4a] flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                {getServiceIcon(service.icon)}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
