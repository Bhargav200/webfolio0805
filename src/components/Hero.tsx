import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { AnimatedGraphic } from './AnimatedGraphic';
import { HeroMotionGraphics } from './hero/HeroMotionGraphics';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-dark via-dark-light to-dark relative overflow-hidden"
    >
      <HeroMotionGraphics />
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <div className="relative transform hover:scale-[1.01] transition-transform duration-300">
            <AnimatedGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
