import React from 'react';
import { Box } from '@mui/material';

interface BackgroundOverlayProps {
  imageUrl: string;
  opacity?: number;
}

export const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  imageUrl,
  opacity = 0.15
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'opacity 1s ease-in-out',
      }}
    />
  );
};
