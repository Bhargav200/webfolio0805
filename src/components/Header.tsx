import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { SpaceLogo } from './SpaceLogo'; // Ensure the path is correct

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left section with logos */}
        <div className="flex items-center space-x-4">
          {/* Clickable SpaceLogo */}
          <a href="#about" className="hover:opacity-80 transition">
            <SpaceLogo />
          </a>

          {/* Container for the APBRT logo */}
          <div className="container">
            <a
              href="#home"
              className="hover:opacity-80 transition"
            >
              {/* Replace this <img> with a component if needed */}
              <img
                src="src/assets/apbrtlogo.png"
                alt="APBRT Logo"
                className="w-auto h-8"
              />
            </a>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8"> {/* Increased spacing */}
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
          <a href="https://github.com" className="text-gray-300 hover:text-primary transition" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-primary transition" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:john@example.com" className="text-gray-300 hover:text-primary transition" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <button className="md:hidden text-primary" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
