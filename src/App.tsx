import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { JojoProvider } from './contexts/JojoProvider';
import { useJojo } from './hooks/useJojo';
import { createJojoTheme } from './theme';
import HomePage from './components/HomePage';
import CustomizePage from './components/CustomizePage';
import ExtraPage from './components/ExtraPage';
import BioPage from './components/BioPage';
import Layout from './components/Layout';
import NotificationSystem from './components/NotificationSystem';

function ThemedApp() {
  const { state } = useJojo();
  const theme = React.useMemo(() => createJojoTheme(state.theme), [state.theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="customize" element={<CustomizePage />} />
          <Route path="extra" element={<ExtraPage />} />
          <Route path="bio/:name" element={<BioPage />} />
        </Route>
      </Routes>
      <NotificationSystem />
    </ThemeProvider>
  );
}

function App() {
  return (
    <JojoProvider>
      <ThemedApp />
    </JojoProvider>
  );
}

export default App;