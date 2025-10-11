import { useState, useEffect } from 'react';

const FACT_ROTATION_INTERVAL = 15000; // 15 seconds

interface Fact {
  text: string;
  category: 'trivia' | 'character' | 'stand' | 'reference';
}

export const useFactRotation = (facts: Fact[]) => {
  const [currentFact, setCurrentFact] = useState(facts[0]);

  const refreshFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentFact(facts[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setCurrentFact(facts[randomIndex]);
    }, FACT_ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [facts]);

  return {
    currentFact: currentFact.text,
    refreshFact,
  };
};
