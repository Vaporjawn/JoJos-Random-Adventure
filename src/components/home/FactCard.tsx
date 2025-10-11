import React from 'react';
import { Card, CardContent, Box, Typography, IconButton, useTheme } from '@mui/material';
import { Star } from '@mui/icons-material';

interface FactCardProps {
  fact: string;
  onRefresh: () => void;
}

const FactCard: React.FC<FactCardProps> = ({ fact, onRefresh }) => {
  const theme = useTheme();

  return (
    <Card sx={{
      mb: 4,
      background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
      position: 'relative',
      overflow: 'visible',
      '&:before': {
        content: '"💎"',
        position: 'absolute',
        top: '-15px',
        left: '-15px',
        fontSize: '3rem',
      }
    }}>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Star sx={{ color: 'secondary.main', mr: 1, fontSize: '2rem' }} />
          <Typography variant="h5" component="h3" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Did You Know?
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            size="large"
            onClick={onRefresh}
            sx={{
              border: '2px solid #000',
              boxShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              '&:hover': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }
            }}
          >
            🔄
          </IconButton>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.6 }}>
          {fact}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FactCard;
