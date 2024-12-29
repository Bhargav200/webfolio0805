import React from 'react';
import { Brain } from 'lucide-react';
import { TechLogo } from './TechLogo';

const aiTechnologies = [
  {
    name: 'TensorFlow',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
    color: '#FF6F00'
  },
  {
    name: 'Generative AI',
    logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_ai.svg',
    color: '#00A67E'
  },
  {
    name: 'Python',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    color: '#3776AB'
  },
  {
    name: 'NumPy',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
    color: '#013243'
  }
];

export function AISkills() {
  return (
    <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-8">
        <Brain className="w-8 h-8 text-primary mr-4" />
        <h3 className="text-2xl font-bold text-white font-mono">AI & ML</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiTechnologies.map((tech) => (
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