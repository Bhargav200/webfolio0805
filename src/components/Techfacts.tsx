Here is the combined code for the `TechFact` component, inspired by the provided `Footer` component:

```tsx
import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { useLocation } from 'react-router-dom';

const TechFact = () => {
  const location = useLocation();
  const showTechFacts = ['/', '/contact'].includes(location.pathname);

  const techFacts = [
    'The first computer virus was created in 1983',
    'The first computer mouse was made of wood',
    'The first domain name ever registered was Symbolics.com',
    'The first computer programmer was a woman - Ada Lovelace',
    'The first computer game was created in 1962',
    'Bitcoin\'s creator remains anonymous to this day',
    'The first website is still online at info.cern.ch'
  ];

  const [fact, setFact] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshFact = () => {
    setIsRefreshing(true);
    setFact(techFacts[Math.floor(Math.random() * techFacts.length)]);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  useEffect(() => {
    setFact(techFacts[Math.floor(Math.random() * techFacts.length)]);
  }, []);

  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-green-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        {showTechFacts && (
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-green-400 font-['Press_Start_2P'] tracking-wider whitespace-nowrap">
                GUESS WHAT
              </h2>
              <Lightbulb size={20} className="text-yellow-400 animate-pulse" />
            </div>
            <div className="h-8 w-full overflow-hidden">
              <TypeWriter
                text={[fact]}
                className="text-sm text-green-400 font-mono"
                delay={50}
                infinite={false}
              />
            </div>
            <button 
              onClick={refreshFact}
              className="text-primary hover:text-primary-light transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        )}
        <div className="text-center text-xs text-gray-500 mt-2">
          <p>&copy; {new Date().getFullYear()} APBRT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TechFact;
```

This combined code integrates the tech facts and typewriter effect into a single functional component, while maintaining the styling and structure of the provided `Footer` component.
