import React from 'react';
import { Monitor } from 'lucide-react';
import { TechLogo } from './TechLogo';

const frontendTechnologies = [
  {
    name: 'React',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  {
    name: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    color: '#3178C6'
  },
  {
    name: 'Next.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    color: '#000000'
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg',
    color: '#38B2AC'
  },
  {
    name: 'HTML5',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    color: '#E34F26'
  },
  {
    name: 'CSS3',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    color: '#1572B6'
  },
  {
    name: 'JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'TensorFlow',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    color: '#FF6F00'
  }
];

export function FrontendSkills() {
  return (
    <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-8">
        <Monitor className="w-8 h-8 text-primary mr-4" />
        <h3 className="text-2xl font-bold text-white font-mono">Frontend</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {frontendTechnologies.map((tech) => (
          <TechLogo
            key={tech.name}
            name={tech.name}
            logo={tech.logo}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}