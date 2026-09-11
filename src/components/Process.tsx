import React from 'react';
import { MessageCircle, FileText, Code2, CheckCircle2, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: 'chat',
    title: 'Discovery Call/Chat',
    description: "We talk through your goals, must-have features, and budget — over Messenger, email, or a call.",
  },
  {
    icon: 'proposal',
    title: 'Proposal & Scope',
    description: 'You get a clear scope, timeline, and price in writing before any development starts.',
  },
  {
    icon: 'development',
    title: 'Development',
    description: "I build the system with regular progress updates and milestone checkpoints along the way.",
  },
  {
    icon: 'testing',
    title: 'Testing & Handover',
    description: "We test everything thoroughly before launch, then I walk you through how to use and manage it.",
  },
  {
    icon: 'support',
    title: 'Ongoing Support',
    description: "I stay available after launch to fix issues and make sure your team is using the system smoothly.",
  },
];

const getStepIcon = (icon: string) => {
  switch (icon) {
    case 'chat':
      return <MessageCircle className="w-5 h-5 text-blue-400" />;
    case 'proposal':
      return <FileText className="w-5 h-5 text-cyan-400" />;
    case 'development':
      return <Code2 className="w-5 h-5 text-indigo-400" />;
    case 'testing':
      return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    case 'support':
      return <LifeBuoy className="w-5 h-5 text-amber-400" />;
    default:
      return <Code2 className="w-5 h-5 text-blue-400" />;
  }
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[#141c2e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="text-blue-500 font-bold">›</span> HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-normal">
            A clear, no-surprises process from the first message to a system your team actually uses.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-5 rounded-2xl bg-[#0c1220]/90 border border-[#1a273f] hover:border-[#273a5f] transition-all duration-200 space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#121b2d] border border-[#1e2e4a] flex items-center justify-center">
                  {getStepIcon(step.icon)}
                </div>
                <span className="text-xs font-mono text-gray-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
