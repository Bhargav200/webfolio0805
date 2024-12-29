import React from 'react';
import { Award } from 'lucide-react';

export function CertificatesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
      
      {/* Floating award icons */}
      {[...Array(5)].map((_, i) => (
        <Award
          key={i}
          className="absolute text-primary/10 animate-float"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            width: '48px',
            height: '48px',
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}