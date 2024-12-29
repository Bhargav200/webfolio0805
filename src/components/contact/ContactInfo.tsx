import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white font-mono mb-4">Contact Information</h3>
        <p className="text-gray-400 mb-6">
        I’m always happy to connect! Feel free to reach out if you’d like to discuss new projects, share creative ideas, or explore opportunities to work together on your vision.
        </p>
      </div>
      
      <div className="space-y-4">
        <a href="mailto:john@example.com" className="flex items-center group">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-white group-hover:text-primary transition-colors">apbrt.171250172@gmail.com</p>
          </div>
        </a>
        
        <a href="tel:+15551234567" className="flex items-center group">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="text-white group-hover:text-primary transition-colors">+91 98853*****</p>
          </div>
        </a>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="text-white">Secunderabad, Telangana</p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-primary/10">
        <p className="text-gray-400 mb-4">Find me on</p>
        <div className="flex space-x-4">
          <a href="https://github.com/Bhargav200" className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Github className="w-5 h-5 text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/bhargavraviteja/" className="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}