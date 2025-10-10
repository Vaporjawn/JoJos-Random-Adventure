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
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* App Bar */}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            JoJo's Bizarre Adventure Randomizer
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
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            JoJo's Bizarre Adventure
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'secondary.main' }}>
            Randomizer
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Discover random episodes, manga chapters, and wiki pages from the bizarre world of JoJo
          </Typography>
        </Box>

        {/* Random Fact Card */}
        <Card sx={{ mb: 4, background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)` }}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Star sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                Did You Know?
              </Typography>
              <Box flexGrow={1} />
              <IconButton
                size="small"
                onClick={() => {
                  const randomIndex = Math.floor(Math.random() * JOJO_FACTS.length);
                  setCurrentFact(JOJO_FACTS[randomIndex]);
                }}
              >
                🔄
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              {currentFact.text}
            </Typography>
          </CardContent>
        </Card>

        {/* Main Action Buttons */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => selectAnime()}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <PlayArrow sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Random Anime
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  Watch a random episode from the animated series
                </Typography>
                <Button variant="contained" color="primary" fullWidth size="large">
                  Select Episode
                </Button>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Press 'A' for quick access
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => selectManga()}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <MenuBook sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Random Manga
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  Read a random chapter from the manga series
                </Typography>
                <Button variant="contained" color="success" fullWidth size="large">
                  Select Chapter
                </Button>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Press 'M' for quick access
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => openRandomWiki()}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <Public sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Random Wiki
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  Explore a random page from the JoJo wiki
                </Typography>
                <Button variant="contained" color="info" fullWidth size="large">
                  Open Wiki Page
                </Button>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Press 'W' for quick access
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Stats Overview */}
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              Your Statistics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
                    {state.statistics.totalViews}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Total Views
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="secondary" sx={{ fontWeight: 'bold' }}>
                    {state.favorites.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Favorites
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main" sx={{ fontWeight: 'bold' }}>
                    {Object.keys(state.statistics.partViews).length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Parts Explored
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="info.main" sx={{ fontWeight: 'bold' }}>
                    {state.history.length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    History Items
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Box mt={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Data Management
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Button
              variant="outlined"
              startIcon={<FileDownload />}
              onClick={exportData}
            >
              Export Data
            </Button>
            <Button
              variant="outlined"
              startIcon={<FileUpload />}
              component="label"
            >
              Import Data
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
        sx={{ '& .MuiDrawer-paper': { width: isMobile ? '100%' : 400, p: 2 } }}
      >
        <Box display="flex" alignItems="center" justifyContent="between" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            History
          </Typography>
          <IconButton onClick={() => setHistoryDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          placeholder="Search history..."
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <List>
          {filteredHistory.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemIcon>
                {item.medium === 'anime' ? <PlayArrow color="primary" /> : <MenuBook color="success" />}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                secondary={
                  <Box>
                    <Chip
                      label={PART_INFO[item.part]?.name || `Part ${item.part}`}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                    <Typography variant="caption" display="block">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
          {filteredHistory.length === 0 && (
            <ListItem>
              <ListItemText primary="No history found" secondary="Start watching or reading to build your history" />
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* Stats Drawer */}
      <Drawer
        anchor="right"
        open={statsDrawerOpen}
        onClose={() => setStatsDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: isMobile ? '100%' : 400, p: 2 } }}
      >
        <Box display="flex" alignItems="center" justifyContent="between" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Statistics
          </Typography>
          <IconButton onClick={() => setStatsDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Part Views
            </Typography>
            {Object.entries(state.statistics.partViews).map(([part, views]) => (
              <Box key={part} display="flex" justifyContent="between" alignItems="center" mb={1}>
                <Typography variant="body2">
                  {PART_INFO[parseInt(part)]?.name || `Part ${part}`}
                </Typography>
                <Chip label={views} size="small" />
              </Box>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last view: {state.statistics.lastViewDate ?
                new Date(state.statistics.lastViewDate).toLocaleDateString() :
                'Never'
              }
            </Typography>
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
  );
};

export default HomePage;
