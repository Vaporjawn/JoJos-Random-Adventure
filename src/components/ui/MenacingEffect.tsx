import React from 'react';
import { Box, Typography } from '@mui/material';

interface MenacingEffectProps {
  show: boolean;
}

export const MenacingEffect: React.FC<MenacingEffectProps> = ({ show }) => {
  if (!show) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
        fontWeight: 'bold',
        opacity: 0.2,
      }}
    >
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: 'inherit',
          transform: 'rotate(-15deg)',
        }}
      >
        ゴ
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          fontSize: 'inherit',
          transform: 'rotate(20deg)',
        }}
      >
        ゴ
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          fontSize: 'inherit',
          transform: 'rotate(10deg)',
        }}
      >
        ゴ
      </Typography>
      <Typography
        component="div"
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: '8%',
          fontSize: 'inherit',
          transform: 'rotate(-20deg)',
        }}
      >
        ゴ
      </Typography>
    </Box>
  );
};
