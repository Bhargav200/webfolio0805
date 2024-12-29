import React from 'react';
import { TechIcons } from './TechIcons';
import { GeometricShapes } from './GeometricShapes';
import { CircuitLines } from './CircuitLines';

export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <TechIcons />
      <GeometricShapes />
      <CircuitLines />
    </div>
  );
}