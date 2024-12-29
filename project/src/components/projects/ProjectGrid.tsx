import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projectData';

export function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}