import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

export function HeroContent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hi, I\'m A P Bhargav Ravi Teja^500', 'Full Stack Developer^1000', 'Problem Solver^1000', 'AI Enthusiast^1000'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-lg blur"></div>
      <div className="relative bg-dark-lighter p-8 rounded-lg border border-primary/20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          <span ref={el}></span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          I build exceptional digital experiences that make people's lives easier.
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="group px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20 flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-dark hover:border-transparent transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}