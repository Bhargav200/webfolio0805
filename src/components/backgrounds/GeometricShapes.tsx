import React from 'react';

export function GeometricShapes() {
  return (
    <>
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full -top-48 -right-48 animate-float"></div>
      <div className="absolute w-96 h-96 bg-primary/10 rounded-full -bottom-48 -left-48 animate-float-delayed"></div>
      <div className="absolute w-64 h-64 bg-dark-lighter/50 rounded-lg top-1/4 -left-32 transform rotate-45 animate-float"></div>
      <div className="absolute w-64 h-64 bg-dark-lighter/50 rounded-lg bottom-1/4 -right-32 transform -rotate-45 animate-float-delayed"></div>
    </>
  );
}