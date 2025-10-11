import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { UserStatistics } from '../../types';

interface StatsDrawerProps {
  open: boolean;
  onClose: () => void;
  statistics: UserStatistics;
  getPartName: (part: number) => string;
}

const StatsDrawer: React.FC<StatsDrawerProps> = ({
  open,
  onClose,
  statistics,
  getPartName,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: isMobile ? '100%' : 400,
          p: 3,
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, rgba(0,0,0,0.05))`,
          borderLeft: `4px solid ${theme.palette.golden.main}`,
        }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        sx={{
          pb: 2,
          borderBottom: `3px solid ${theme.palette.golden.main}`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          📊 STATISTICS
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            border: `2px solid ${theme.palette.golden.main}`,
            borderRadius: 0,
            '&:hover': {
              background: theme.palette.golden.main,
              color: '#000',
            }
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Card sx={{
        mb: 3,
        borderRadius: 0,
        border: '4px solid #000',
        boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
        background: `linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05))`,
      }}>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              mb: 3,
              pb: 2,
              borderBottom: '2px solid #000',
            }}
          >
            📈 PART VIEWS
          </Typography>
          {Object.entries(statistics.partViews).map(([part, views]) => (
            <Box
              key={part}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              sx={{
                p: 1.5,
                background: 'rgba(0,0,0,0.03)',
                border: '2px solid #000',
                borderRadius: 0,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                {getPartName(parseInt(part))}
              </Typography>
              <Chip
                label={views}
                size="medium"
                sx={{
                  borderRadius: 0,
                  fontWeight: 900,
                  fontSize: '1rem',
                  border: '2px solid #000',
                  background: theme.palette.golden.main,
                }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>

      <Card sx={{
        borderRadius: 0,
        border: '4px solid #000',
        boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
        background: `linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05))`,
      }}>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              mb: 3,
              pb: 2,
              borderBottom: '2px solid #000',
            }}
          >
            ⚡ RECENT ACTIVITY
          </Typography>
          <Box
            sx={{
              p: 2,
              background: `linear-gradient(135deg, ${theme.palette.golden.main}20, ${theme.palette.golden.main}10)`,
              border: '2px solid #000',
              borderRadius: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Last view: {statistics.lastViewDate ?
                new Date(statistics.lastViewDate).toLocaleDateString() :
                'Never'
              }
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Drawer>
  );
};

export default StatsDrawer;
