import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

export function HeroContent() {
  const titleEl = useRef(null);
  const descriptionEl = useRef(null);

  useEffect(() => {
    const titleTyped = new Typed(titleEl.current, {
      strings: ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    const descriptionTyped = new Typed(descriptionEl.current, {
      strings: ['Crafting digital experiences through clean code and innovative solutions. Specialized in modern web technologies and artificial intelligence.'],
      typeSpeed: 30,
      showCursor: false,
      startDelay: 1000,
    });

    return () => {
      titleTyped.destroy();
      descriptionTyped.destroy();
    };
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-light tracking-wide">
        Hi, I'm <span className="text-primary font-normal">A P Bhargav Ravi Teja</span>
      </h1>
      
      <div className="h-12 font-mono">
        <span ref={titleEl} className="text-xl text-primary-light" />
      </div>
      
      <div className="text-gray-400 leading-relaxed max-w-lg min-h-[80px]">
        <span ref={descriptionEl} />
      </div>
      
      <div className="flex gap-4 pt-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-primary/90 hover:bg-primary text-dark font-medium rounded-lg transition-all duration-300 flex items-center gap-2 group"
        >
          View Work
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary/20 hover:border-primary/40 text-primary rounded-lg transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
