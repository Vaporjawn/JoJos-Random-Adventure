import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close, Search, PlayArrow, MenuBook } from '@mui/icons-material';
import { HistoryEntry } from '../../types';

interface HistoryDrawerProps {
  open: boolean;
  onClose: () => void;
  history: HistoryEntry[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  getPartName: (part: number) => string;
}

const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  open,
  onClose,
  history,
  searchQuery,
  onSearchChange,
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
          borderLeft: `4px solid ${theme.palette.primary.main}`,
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
          borderBottom: `3px solid ${theme.palette.primary.main}`,
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
          ⏳ HISTORY
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 0,
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#fff',
            }
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <TextField
        fullWidth
        placeholder="SEARCH HISTORY..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            border: '3px solid #000',
            fontWeight: 700,
          }
        }}
      />

      <List sx={{ '& .MuiListItem-root': { mb: 2 } }}>
        {history.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              border: '3px solid #000',
              borderRadius: 0,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              background: item.medium === 'anime'
                ? `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.main}20)`
                : `linear-gradient(135deg, ${theme.palette.success.main}10, ${theme.palette.success.main}20)`,
            }}
          >
            <ListItemIcon>
              {item.medium === 'anime' ? (
                <PlayArrow sx={{ fontSize: 32, color: 'primary.main' }} />
              ) : (
                <MenuBook sx={{ fontSize: 32, color: 'success.main' }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  {item.title}
                </Typography>
              }
              secondary={
                <Box>
                  <Chip
                    label={getPartName(item.part)}
                    size="small"
                    sx={{
                      mr: 1,
                      mb: 1,
                      borderRadius: 0,
                      fontWeight: 700,
                      border: '2px solid #000',
                    }}
                  />
                  <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
                    {new Date(item.timestamp).toLocaleDateString()}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
        {history.length === 0 && (
          <ListItem
            sx={{
              border: '3px dashed #ccc',
              borderRadius: 0,
              textAlign: 'center',
            }}
          >
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                  NO HISTORY FOUND
                </Typography>
              }
              secondary="Start watching or reading to build your history"
            />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default HistoryDrawer;
