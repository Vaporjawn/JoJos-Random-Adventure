import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  PlayArrow,
  MenuBook,
  Brightness4,
  Brightness7,
  History,
  BarChart,
  Search,
  FileDownload,
  FileUpload,
  Star,
  Close,
  Public, // Replaced Wikipedia
} from '@mui/icons-material';
import { useJojo } from '../hooks/useJojo';
import { JOJO_FACTS, PART_INFO } from '../constants';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { state, selectAnime, selectManga, openRandomWiki, toggleTheme, exportData, importData } = useJojo();

  const [currentFact, setCurrentFact] = useState(JOJO_FACTS[0]);
  const [historyDrawerOpen, setHistoryDrawerOpen] = useState(false);
  const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPartBg, setCurrentPartBg] = useState(0);

  // Part backgrounds array
  const partBackgrounds = [
    '/images/PB.png',
    '/images/BT.png',
    '/images/SDC.png',
    '/images/DiU.png',
    '/images/VA.png',
    '/images/SO.png',
    '/images/SBRJohnny.png',
    '/images/JJL.png',
  ];

  // Rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartBg((prev) => (prev + 1) % partBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotate facts every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * JOJO_FACTS.length);
      setCurrentFact(JOJO_FACTS[randomIndex]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'a':
          selectAnime();
          break;
        case 'm':
          selectManga();
          break;
        case 'w':
          openRandomWiki();
          break;
        case 't':
          toggleTheme();
          break;
        case 'h':
          setHistoryDrawerOpen(!historyDrawerOpen);
          break;
        case 's':
          setStatsDrawerOpen(!statsDrawerOpen);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectAnime, selectManga, openRandomWiki, toggleTheme, historyDrawerOpen, statsDrawerOpen]);

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        importData(data);
      } catch (error) {
        console.error('Import failed:', error);
      }
    };
    reader.readAsText(file);
  };

  const filteredHistory = state.history.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    PART_INFO[item.part]?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Add CSS keyframes for animations */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <Box
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${partBackgrounds[currentPartBg]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            zIndex: 0,
            transition: 'opacity 1s ease-in-out',
          },
          '&:after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
            zIndex: 0,
            pointerEvents: 'none',
          }
        }}
      >
      {/* Menacing Effect */}
      <Box
        sx={{
          position: 'fixed',
          top: '20%',
          right: '10%',
          fontSize: '8rem',
          opacity: 0.1,
          fontWeight: 900,
          transform: 'rotate(-15deg)',
          zIndex: 0,
          pointerEvents: 'none',
          color: theme.palette.primary.main,
        }}
      >
        ゴゴゴゴ
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
      {/* App Bar */}
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

          <IconButton color="inherit" onClick={toggleTheme}>
            {state.theme === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <IconButton color="inherit" onClick={() => setHistoryDrawerOpen(true)}>
            <History />
          </IconButton>

          <IconButton color="inherit" onClick={() => setStatsDrawerOpen(true)}>
            <BarChart />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Hero Section */}
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

        {/* Random Fact Card */}
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
                onClick={() => {
                  const randomIndex = Math.floor(Math.random() * JOJO_FACTS.length);
                  setCurrentFact(JOJO_FACTS[randomIndex]);
                }}
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
              {currentFact.text}
            </Typography>
          </CardContent>
        </Card>

        {/* Main Action Buttons */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.main}30)`,
                position: 'relative',
                overflow: 'visible',
                '&:before': {
                  content: '"⭐"',
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  fontSize: '3rem',
                }
              }}
              onClick={() => selectAnime()}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <PlayArrow sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                  ANIME
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
                  Watch a random episode
                </Typography>
                <Button variant="contained" color="primary" fullWidth size="large">
                  SELECT EPISODE
                </Button>
                <Box sx={{
                  mt: 2,
                  p: 1,
                  background: 'rgba(0,0,0,0.1)',
                  border: '2px dashed',
                  borderColor: 'primary.main',
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
                    PRESS 'A' FOR QUICK ACCESS
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${theme.palette.success.main}10, ${theme.palette.success.main}30)`,
                position: 'relative',
                overflow: 'visible',
                '&:before': {
                  content: '"📖"',
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  fontSize: '3rem',
                },
              }}
              onClick={() => selectManga()}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <MenuBook sx={{ fontSize: 64, color: 'success.main', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                  MANGA
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
                  Read a random chapter
                </Typography>
                <Button variant="contained" color="success" fullWidth size="large">
                  SELECT CHAPTER
                </Button>
                <Box sx={{
                  mt: 2,
                  p: 1,
                  background: 'rgba(0,0,0,0.1)',
                  border: '2px dashed',
                  borderColor: 'success.main',
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
                    PRESS 'M' FOR QUICK ACCESS
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                background: `linear-gradient(135deg, ${theme.palette.info.main}10, ${theme.palette.info.main}30)`,
                position: 'relative',
                overflow: 'visible',
                '&:before': {
                  content: '"🌐"',
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  fontSize: '3rem',
                },
              }}
              onClick={() => openRandomWiki()}
            >
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Public sx={{ fontSize: 64, color: 'info.main', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 900, textTransform: 'uppercase' }}>
                  WIKI
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontWeight: 600 }}>
                  Explore a random page
                </Typography>
                <Button variant="contained" color="info" fullWidth size="large">
                  OPEN WIKI PAGE
                </Button>
                <Box sx={{
                  mt: 2,
                  p: 1,
                  background: 'rgba(0,0,0,0.1)',
                  border: '2px dashed',
                  borderColor: 'info.main',
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
                    PRESS 'W' FOR QUICK ACCESS
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Stats Overview */}
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
                <Box
                  textAlign="center"
                  sx={{
                    p: 2,
                    background: `linear-gradient(135deg, ${theme.palette.phantom.main}15, ${theme.palette.phantom.main}30)`,
                    border: `3px solid ${theme.palette.phantom.main}`,
                    borderRadius: 0,
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: theme.palette.phantom.main,
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: 'phantom.main',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                    }}
                  >
                    {state.statistics.totalViews}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Total Views
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  textAlign="center"
                  sx={{
                    p: 2,
                    background: `linear-gradient(135deg, ${theme.palette.battle.main}15, ${theme.palette.battle.main}30)`,
                    border: `3px solid ${theme.palette.battle.main}`,
                    borderRadius: 0,
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: theme.palette.battle.main,
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: 'battle.main',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                    }}
                  >
                    {state.favorites.length}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Favorites
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  textAlign="center"
                  sx={{
                    p: 2,
                    background: `linear-gradient(135deg, ${theme.palette.stardust.main}15, ${theme.palette.stardust.main}30)`,
                    border: `3px solid ${theme.palette.stardust.main}`,
                    borderRadius: 0,
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: theme.palette.stardust.main,
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: 'stardust.main',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                    }}
                  >
                    {Object.keys(state.statistics.partViews).length}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Parts Explored
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  textAlign="center"
                  sx={{
                    p: 2,
                    background: `linear-gradient(135deg, ${theme.palette.golden.main}15, ${theme.palette.golden.main}30)`,
                    border: `3px solid ${theme.palette.golden.main}`,
                    borderRadius: 0,
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: theme.palette.golden.main,
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      color: 'golden.main',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                    }}
                  >
                    {state.history.length}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    History Items
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Box
          mt={4}
          textAlign="center"
          sx={{
            p: 4,
            border: '4px solid #000',
            borderRadius: 0,
            boxShadow: '8px 8px 0px rgba(0,0,0,0.3)',
            background: `linear-gradient(135deg, rgba(0,0,0,0.03), rgba(0,0,0,0.08))`,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 900,
              textTransform: 'uppercase',
              mb: 3,
              letterSpacing: '0.1em',
            }}
          >
            DATA MANAGEMENT
          </Typography>
          <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<FileDownload />}
              onClick={exportData}
              sx={{
                minWidth: '200px',
              }}
            >
              EXPORT DATA
            </Button>
            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<FileUpload />}
              component="label"
              sx={{
                minWidth: '200px',
              }}
            >
              IMPORT DATA
              <input
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                onChange={handleFileImport}
              />
            </Button>
          </Box>
        </Box>
      </Container>

      {/* History Drawer */}
      <Drawer
        anchor="right"
        open={historyDrawerOpen}
        onClose={() => setHistoryDrawerOpen(false)}
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
            onClick={() => setHistoryDrawerOpen(false)}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
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
          {filteredHistory.map((item) => (
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
                      label={PART_INFO[item.part]?.name || `Part ${item.part}`}
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
          {filteredHistory.length === 0 && (
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

      {/* Stats Drawer */}
      <Drawer
        anchor="right"
        open={statsDrawerOpen}
        onClose={() => setStatsDrawerOpen(false)}
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
            onClick={() => setStatsDrawerOpen(false)}
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
            {Object.entries(state.statistics.partViews).map(([part, views]) => (
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
                  {PART_INFO[parseInt(part)]?.name || `Part ${part}`}
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
                Last view: {state.statistics.lastViewDate ?
                  new Date(state.statistics.lastViewDate).toLocaleDateString() :
                  'Never'
                }
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Drawer>

      {/* Floating Action Buttons */}
      <Box sx={{ position: 'fixed', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Fab
          color="primary"
          size="medium"
          onClick={() => selectAnime()}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <PlayArrow />
        </Fab>
        <Fab
          color="secondary"
          size="medium"
          onClick={() => selectManga()}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuBook />
        </Fab>
      </Box>
      </Box>
    </Box>
    </>
  );
};

export default HomePage;
