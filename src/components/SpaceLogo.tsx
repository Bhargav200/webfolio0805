import React from 'react';

export function SpaceLogo() {
  return (
    <div className="flex items-center">
      <img 
        src="https://raw.githubusercontent.com/apbrt/apbrt/main/logo.png"  
        alt="APBRT Logo" 
        className="h-20 w-auto hover:opacity-80 transition-opacity"
      />
    </div>
  );
}
