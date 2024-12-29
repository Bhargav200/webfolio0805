import React from 'react';
import { Code, Database, Cpu, Network, Wifi, Server } from 'lucide-react';

export function TechIcons() {
  return (
    <>
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
    </>
  );
}