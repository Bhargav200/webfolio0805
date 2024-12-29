import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactBackground } from './ContactBackground';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark relative overflow-hidden">
      <ContactBackground />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary font-mono">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}