import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectTags } from './ProjectTags';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, github, demo, tags }: ProjectCardProps) {
  return (
    <div className="group bg-dark-lighter rounded-xl overflow-hidden border border-primary/10 transform hover:scale-[1.02] transition-all duration-300 hover:border-primary/30">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <ProjectTags tags={tags} />
        
        <div className="flex space-x-4 mt-4">
          <a
            href={github}
            className="flex items-center text-primary hover:text-primary-light transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a
            href={demo}
            className="flex items-center text-primary hover:text-primary-light transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}