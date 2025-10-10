import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
  Paper,
  SelectChangeEvent,
} from '@mui/material';
import { PART_INFO } from '../constants'; // Assuming constants are moved

import { JojoRandomizer } from '../jojo';

const CustomizePage: React.FC = () => {
  const [part, setPart] = useState<string>('');
  const [medium, setMedium] = useState<string>('');

  const handlePartChange = (event: SelectChangeEvent<string>) => {
    setPart(event.target.value);
  };

  const handleMediumChange = (event: SelectChangeEvent<string>) => {
    setMedium(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (part && medium) {
      JojoRandomizer.customize(parseInt(part, 10), medium);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Customize Randomizer
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="part-select-label">Choose a Part</InputLabel>
            <Select
              labelId="part-select-label"
              id="part-select"
              value={part}
              label="Choose a Part"
              onChange={handlePartChange}
            >
              {Object.values(PART_INFO).map((p) => (
                <MenuItem key={p.id} value={p.id.toString()}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="medium-select-label">Anime or Manga</InputLabel>
            <Select
              labelId="medium-select-label"
              id="medium-select"
              value={medium}
              label="Anime or Manga"
              onChange={handleMediumChange}
            >
              <MenuItem value="anime">Anime</MenuItem>
              <MenuItem value="manga">Manga</MenuItem>
              <MenuItem value="both">Both</MenuItem>
              <MenuItem value="bio">Biography</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!part || !medium}
          >
            Customize
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CustomizePage;
