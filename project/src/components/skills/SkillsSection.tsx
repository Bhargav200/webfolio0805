import React from 'react';
import { FrontendSkills } from './FrontendSkills';
import { BackendSkills } from './BackendSkills';
import { AISkills } from './AISkills';
import { SkillsBackground } from './SkillsBackground';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      <SkillsBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary font-mono">
          Skills & Expertise
        </h2>
        <div className="grid gap-12">
          <AISkills />
          <div className="grid md:grid-cols-2 gap-12">
            <FrontendSkills />
            <BackendSkills />
          </div>
        </div>
      </div>
    </section>
  );
}