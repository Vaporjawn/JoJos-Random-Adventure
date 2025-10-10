import React from 'react';
import {
  Snackbar,
  Alert,
  AlertColor,
  Slide,
  SlideProps,
  Box,
} from '@mui/material';
import { useJojo } from '../hooks/useJojo';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const NotificationSystem: React.FC = () => {
  const { state } = useJojo();

  return (
    <Box>
      {state.notifications.map((notification, index) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={5000}
          TransitionComponent={SlideTransition}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          sx={{
            mb: index * 7, // Stack notifications
            position: 'fixed',
            zIndex: theme => theme.zIndex.snackbar + index,
          }}
        >
          <Alert
            severity={notification.type as AlertColor}
            variant="filled"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </Box>
  );
};

export default NotificationSystem;