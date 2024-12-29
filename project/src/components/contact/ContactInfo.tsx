import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white font-mono mb-4">Contact Information</h3>
        <p className="text-gray-400 mb-6">
          Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
      
      <div className="space-y-4">
        <a href="mailto:john@example.com" className="flex items-center group">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white group-hover:text-primary transition-colors">john@example.com</p>
          </div>
        </a>
        
        <a href="tel:+15551234567" className="flex items-center group">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-white group-hover:text-primary transition-colors">+1 (555) 123-4567</p>
          </div>
        </a>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-white">San Francisco, CA</p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-primary/10">
        <p className="text-gray-400 mb-4">Find me on</p>
        <div className="flex space-x-4">
          <a href="https://github.com" className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Github className="w-5 h-5 text-primary" />
          </a>
          <a href="https://linkedin.com" className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}