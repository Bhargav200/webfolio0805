import React, { useState, useEffect } from 'react';
import { getRandomTechFact } from '../../utils/techFacts';
import { RefreshCw } from 'lucide-react';

export function TechFact() {
  const [fact, setFact] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshFact = () => {
    setIsRefreshing(true);
    setFact(getRandomTechFact());
    setTimeout(() => setIsRefreshing(false), 500);
  };

  useEffect(() => {
    setFact(getRandomTechFact());
  }, []);

  return (
    <div className="text-gray-400 text-sm border-t border-primary/10 pt-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <p className="font-mono">💡 Did you know?</p>
        <button 
          onClick={refreshFact}
          className="text-primary hover:text-primary-light transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>
      <p className="leading-relaxed">{fact}</p>
    </div>
  );
}
