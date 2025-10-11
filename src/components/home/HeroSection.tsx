import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      textAlign="center"
      mb={6}
      sx={{
        position: 'relative',
        py: 4,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(147,112,219,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 900,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.error.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          '&:after': {
            content: '"ジョジョ"',
            position: 'absolute',
            top: '-20px',
            right: '10%',
            fontSize: '2rem',
            opacity: 0.3,
            color: theme.palette.primary.main,
          }
        }}
      >
        JOJO'S BIZARRE ADVENTURE
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          color: 'secondary.main',
          position: 'relative',
          '&:before': {
            content: '"★"',
            position: 'absolute',
            left: '-40px',
            color: theme.palette.secondary.main,
          },
          '&:after': {
            content: '"★"',
            position: 'absolute',
            right: '-40px',
            color: theme.palette.secondary.main,
          }
        }}
      >
        RANDOMIZER
      </Typography>
      <Box sx={{
        display: 'inline-block',
        padding: '16px 32px',
        background: theme.palette.mode === 'light' ? '#fff' : '#1e1e1e',
        border: '3px solid #000',
        boxShadow: '6px 6px 0px rgba(0,0,0,0.3)',
        mt: 2,
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: '0.05em' }}>
          Discover random episodes, manga chapters, and wiki pages
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
