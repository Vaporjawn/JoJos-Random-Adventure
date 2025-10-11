import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import {
  Brightness4,
  Brightness7,
  History,
  BarChart,
} from '@mui/icons-material';

interface AppHeaderProps {
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenHistory: () => void;
  onOpenStats: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  currentTheme,
  onToggleTheme,
  onOpenHistory,
  onOpenStats,
}) => {
  const theme = useTheme();

  return (
    <AppBar position="static" elevation={0} sx={{
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(135deg, #fff 0%, #f0f0f0 100%)'
        : 'linear-gradient(135deg, #1e1e1e 0%, #121212 100%)',
      borderBottom: '4px solid #000',
    }}>
      <Toolbar sx={{ py: 1 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
          }}
        >
          JoJo Randomizer
        </Typography>

        <IconButton color="inherit" onClick={onToggleTheme}>
          {currentTheme === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>

        <IconButton color="inherit" onClick={onOpenHistory}>
          <History />
        </IconButton>

        <IconButton color="inherit" onClick={onOpenStats}>
          <BarChart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
