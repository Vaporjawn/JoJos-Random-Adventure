import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FileDownload, FileUpload } from '@mui/icons-material';

interface DataManagementProps {
  onExport: () => void;
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataManagement: React.FC<DataManagementProps> = ({ onExport, onImport }) => {
  return (
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
          onClick={onExport}
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
            onChange={onImport}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default DataManagement;
