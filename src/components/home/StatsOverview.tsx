import React from 'react';
import { Card, CardContent, Typography, Grid, Box, useTheme } from '@mui/material';

interface StatBoxProps {
  value: number;
  label: string;
  color: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label, color }) => {
  return (
    <Box
      textAlign="center"
      sx={{
        p: 2,
        background: `linear-gradient(135deg, ${color}15, ${color}30)`,
        border: `3px solid ${color}`,
        borderRadius: 0,
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: color,
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: color,
          textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
        }}
      >
        {value}
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {label}
      </Typography>
    </Box>
  );
};

interface StatsOverviewProps {
  totalViews: number;
  favoritesCount: number;
  partsExplored: number;
  historyCount: number;
}

const StatsOverview: React.FC<StatsOverviewProps> = ({
  totalViews,
  favoritesCount,
  partsExplored,
  historyCount,
}) => {
  const theme = useTheme();

  return (
    <Card sx={{
      background: `linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.1))`,
    }}>
      <CardContent>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: 3,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.golden.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative',
            '&:before': {
              content: '"⭐"',
              position: 'absolute',
              left: '-30px',
              color: theme.palette.primary.main,
              WebkitTextFillColor: theme.palette.primary.main,
            },
            '&:after': {
              content: '"⭐"',
              position: 'absolute',
              right: '-30px',
              color: theme.palette.golden.main,
              WebkitTextFillColor: theme.palette.golden.main,
            }
          }}
        >
          YOUR STATISTICS
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <StatBox
              value={totalViews}
              label="Total Views"
              color={theme.palette.phantom.main}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox
              value={favoritesCount}
              label="Favorites"
              color={theme.palette.battle.main}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox
              value={partsExplored}
              label="Parts Explored"
              color={theme.palette.stardust.main}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatBox
              value={historyCount}
              label="History Items"
              color={theme.palette.golden.main}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatsOverview;
