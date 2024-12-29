import React from 'react';
import { Code, Database, Cpu, Network, Wifi, Server } from 'lucide-react';

export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated tech icons */}
      <div className="absolute top-1/4 left-1/4 text-primary/10 animate-float">
        <Code size={48} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-primary/20 animate-float-delayed">
        <Database size={32} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-primary/15 animate-float">
        <Cpu size={40} />
      </div>
      <div className="absolute top-2/3 right-1/3 text-primary/10 animate-float-delayed">
        <Network size={36} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-primary/20 animate-float">
        <Wifi size={44} />
      </div>
      <div className="absolute top-1/2 right-1/4 text-primary/15 animate-float-delayed">
        <Server size={38} />
      </div>

      {/* Geometric shapes */}
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full -top-48 -right-48 animate-float"></div>
      <div className="absolute w-96 h-96 bg-primary/10 rounded-full -bottom-48 -left-48 animate-float-delayed"></div>
      <div className="absolute w-64 h-64 bg-dark-lighter/50 rounded-lg top-1/4 -left-32 transform rotate-45 animate-float"></div>
      <div className="absolute w-64 h-64 bg-dark-lighter/50 rounded-lg bottom-1/4 -right-32 transform -rotate-45 animate-float-delayed"></div>

      {/* Circuit lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
}