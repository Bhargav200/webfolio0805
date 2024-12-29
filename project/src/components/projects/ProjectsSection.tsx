import React from 'react';
import { ProjectGrid } from './ProjectGrid';
import { ProjectsBackground } from './ProjectsBackground';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <ProjectsBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary font-mono">
          Featured Projects
        </h2>
        <ProjectGrid />
      </div>
    </section>
  );
}