import React from 'react';

interface TechLogoProps {
  name: string;
  logo: string;
  color: string;
}

export function TechLogo({ name, logo, color }: TechLogoProps) {
  return (
    <div 
      className="group flex flex-col items-center justify-center p-4 rounded-lg bg-dark hover:bg-dark-light transition-all duration-300"
      style={{ borderColor: `${color}20` }}
    >
      <div className="relative w-12 h-12 mb-2">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
        />
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span className="text-sm text-gray-300 group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}