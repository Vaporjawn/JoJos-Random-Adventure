import { useState, useEffect } from 'react';

const PART_BACKGROUNDS = [
  '/images/PB.png',
  '/images/BT.png',
  '/images/SDC.png',
  '/images/DiU.png',
  '/images/VA.png',
  '/images/SO.png',
  '/images/SBRJohnny.png',
  '/images/JJL.png',
];

const ROTATION_INTERVAL = 5000; // 5 seconds

export const useBackgroundRotation = () => {
  const [currentPartBg, setCurrentPartBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartBg((prev) => (prev + 1) % PART_BACKGROUNDS.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return {
    currentBackground: PART_BACKGROUNDS[currentPartBg],
    backgroundIndex: currentPartBg,
  };
};
