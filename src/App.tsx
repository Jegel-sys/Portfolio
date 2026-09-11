import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projects, featuredProject } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Scroll spy to update active navigation state
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'featured-project', 'projects', 'experience', 'services', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map sub-sections without their own nav link to the closest nav item
            if (sectionId === 'featured-project') {
              setActiveSection('projects');
            } else if (sectionId === 'process') {
              setActiveSection('services');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentModalProject = selectedProjectId
    ? (selectedProjectId === featuredProject.id
        ? featuredProject
        : projects.find((p) => p.id === selectedProjectId) || null)
    : null;

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f3f4f6] flex flex-col selection:bg-blue-600/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenContact={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />

        <About />

        <Skills />

        <FeaturedProject onSelectProject={(id) => setSelectedProjectId(id)} />

        <Projects onSelectProject={(id) => setSelectedProjectId(id)} />

        <Experience />

        <Services />

        <Process />

        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={currentModalProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}
