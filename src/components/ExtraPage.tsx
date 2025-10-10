import React from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { JojoRandomizer } from '../jojo';

const ExtraPage: React.FC = () => {
  const handleRandomBio = () => {
    JojoRandomizer.bio();
  };

  const handleRandomWiki = () => {
    JojoRandomizer.randomWiki();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Extra Features
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRandomBio}
          sx={{ m: 1 }}
        >
          Random Bio
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRandomWiki}
          sx={{ m: 1 }}
        >
          Random Wiki
        </Button>
      </Paper>
    </Container>
  );
};

export default ExtraPage;
