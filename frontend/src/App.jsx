// import React from 'react';
// import PrimarySearchAppBar from './components/PrimarySearchAppBar';
// import PermanentDrawerLeft from './components/Sidebar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';

// function App() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <PrimarySearchAppBar />
//       <Box sx={{ display: 'flex', width: '100%' }}>
//         <PermanentDrawerLeft />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Toolbar /> {/* Spacer to push content below the AppBar */}
//           {/* The content rendered here will be determined by the current route */}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepagenew';
import Home from './components/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import Services from './pages/Services';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home2" element={<Home/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;







