import React, { useEffect, useRef } from 'react';
import { Code, Cpu, Database, Network, Layers, Wifi } from 'lucide-react';

export function HeroMotionGraphics() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const elements = container.getElementsByClassName('motion-element');
      Array.from(elements).forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '1');
        const translateX = (x - 0.5) * speed * 30;
        const translateY = (y - 0.5) * speed * 30;
        const rotate = (x - 0.5) * speed * 15;
        (element as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${getComputedStyle(document.documentElement).getPropertyValue('--color-primary')} 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons with Enhanced Animation */}
      <div 
        className="motion-element absolute top-1/4 left-1/4 text-primary/20 transition-transform duration-300"
        data-speed="2"
      >
        <Code size={48} className="animate-float transform hover:scale-110" />
      </div>
      <div 
        className="motion-element absolute top-1/3 right-1/4 text-primary/30 transition-transform duration-300"
        data-speed="1.5"
      >
        <Cpu size={40} className="animate-float-delayed transform hover:scale-110" />
      </div>
      <div 
        className="motion-element absolute bottom-1/3 left-1/3 text-primary/25 transition-transform duration-300"
        data-speed="1.8"
      >
        <Database size={36} className="animate-float transform hover:scale-110" />
      </div>

      {/* Dynamic Circuit Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"
            style={{
              width: '100%',
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 5}deg)`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs with Enhanced Effects */}
      <div 
        className="motion-element absolute w-96 h-96 rounded-full blur-3xl transition-all duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(46,204,113,0.1) 0%, rgba(46,204,113,0) 70%)',
          top: '10%',
          left: '10%'
        }}
        data-speed="1"
      />
      <div 
        className="motion-element absolute w-96 h-96 rounded-full blur-3xl transition-all duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(46,204,113,0.1) 0%, rgba(46,204,113,0) 70%)',
          bottom: '10%',
          right: '10%'
        }}
        data-speed="1.3"
      />
    </div>
  );
}