import React from 'react';

export function AnimatedGraphic() {
  return (
    <div className="relative w-full h-[400px] bg-dark-light rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      
      {/* Animated circles */}
      <div className="absolute w-32 h-32 bg-primary/20 rounded-full -top-8 -right-8 animate-float"></div>
      <div className="absolute w-24 h-24 bg-primary/30 rounded-full bottom-12 left-8 animate-float-delayed"></div>
      
      {/* Animated code blocks */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-dark-lighter p-4 rounded-lg shadow-lg animate-slide-right">
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="w-3 h-3 rounded-full bg-primary/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary/20"></div>
        </div>
        <div className="space-y-2">
          <div className="w-32 h-2 bg-primary/20 rounded"></div>
          <div className="w-24 h-2 bg-primary/20 rounded"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-dark-lighter p-4 rounded-lg shadow-lg animate-slide-left">
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="w-3 h-3 rounded-full bg-primary/40"></div>
          <div className="w-3 h-3 rounded-full bg-primary/20"></div>
        </div>
        <div className="space-y-2">
          <div className="w-28 h-2 bg-primary/20 rounded"></div>
          <div className="w-20 h-2 bg-primary/20 rounded"></div>
        </div>
      </div>
      
      {/* Center geometric shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-40 h-40 animate-spin-slow">
          <div className="absolute inset-0 border-4 border-primary/30 rounded-lg transform rotate-45"></div>
          <div className="absolute inset-4 border-4 border-primary/20 rounded-lg"></div>
          <div className="absolute inset-8 border-4 border-primary/10 rounded-lg transform -rotate-45"></div>
        </div>
      </div>
    </div>
  );
}