import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { SpaceLogo } from './SpaceLogo'; // Ensure the path is correct

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="hover:opacity-80 transition">
          <SpaceLogo /> {/* This component should render the APBRT logo */}
        </a>
        <div className="hidden md:flex space-x-8">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-primary transition font-mono uppercase tracking-wider text-sm"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-primary transition font-mono uppercase tracking-wider text-sm"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-primary transition font-mono uppercase tracking-wider text-sm"
          >
            Skills
          </a>
          <a 
            href="#certificates" 
            className="text-gray-300 hover:text-primary transition font-mono uppercase tracking-wider text-sm"
          >
            Certificates
          </a>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-primary transition font-mono uppercase tracking-wider text-sm"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com" className="text-gray-300 hover:text-primary transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-primary transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:john@example.com" className="text-gray-300 hover:text-primary transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
