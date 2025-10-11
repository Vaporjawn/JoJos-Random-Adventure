import React from 'react';
import { Card, CardContent, Typography, Button, Box, useTheme } from '@mui/material';

interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: 'primary' | 'success' | 'info' | 'warning' | 'error' | 'secondary';
  emoji: string;
  keyboardShortcut: string;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  emoji,
  keyboardShortcut,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        cursor: 'pointer',
        background: `linear-gradient(135deg, ${theme.palette[buttonColor].main}10, ${theme.palette[buttonColor].main}30)`,
        position: 'relative',
        overflow: 'visible',
        '&:before': {
          content: `"${emoji}"`,
          position: 'absolute',
          top: '-20px',
          right: '-10px',
          fontSize: '3rem',
        },
      }}
      onClick={onClick}
    >
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        {icon}
        <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
          {description}
        </Typography>
        <Button variant="contained" color={buttonColor} fullWidth size="large">
          {buttonText}
        </Button>
        <Box sx={{
          mt: 2,
          p: 1,
          background: 'rgba(0,0,0,0.1)',
          border: '2px dashed',
          borderColor: `${buttonColor}.main`,
        }}>
          <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
            PRESS '{keyboardShortcut}' FOR QUICK ACCESS
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
