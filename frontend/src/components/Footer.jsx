import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box 
      component="footer"
      sx={{ 
        backgroundColor: '#3f51b5', // You can change this color as needed
        color: 'white',
        py: 2,
        px: 4,
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &copy; 2024 E-commerce Website. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;

