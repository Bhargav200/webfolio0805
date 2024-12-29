import React from 'react';
import { Server } from 'lucide-react';
import { TechLogo } from './TechLogo';

const backendTechnologies = [
  {
    name: 'Python',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    color: '#3776AB'
  },
  {
    name: 'NumPy',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
    color: '#013243'
  },
  {
    name: 'Pandas',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
    color: '#150458'
  },
  {
    name: 'Matplotlib',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg',
    color: '#11557C'
  },
  {
    name: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    color: '#68A063'
  },
  {
    name: 'Express.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    color: '#000000'
  },
  {
    name: 'MongoDB',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  {
    name: 'WordPress',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg',
    color: '#21759B'
  }
];

export function BackendSkills() {
  return (
    <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-8">
        <Server className="w-8 h-8 text-primary mr-4" />
        <h3 className="text-2xl font-bold text-white font-mono">Backend & Tools</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {backendTechnologies.map((tech) => (
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