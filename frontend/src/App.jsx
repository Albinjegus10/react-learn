import React from 'react';
import HomePage from './components/HomePage';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import PermanentDrawerLeft from './components/Sidebar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


unction App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <PrimarySearchAppBar />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <PermanentDrawerLeft />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Spacer to push content below the AppBar */}
          <HomePage />
        </Box>
      </Box>
    </Box>
  );
}

export default App;






