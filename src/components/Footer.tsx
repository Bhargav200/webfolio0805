import React from 'react';
export function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0"></div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4"></div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-mono">
            &copy; {new Date().getFullYear()} BRT Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
