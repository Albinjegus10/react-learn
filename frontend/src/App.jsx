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


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/Homepagenew';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
// import Admin from './pages/Admin';
// import Services from './pages/Services';
// import Checkout from './pages/Checkout'; 
// import Reset from "./components/Reset";
// import AddServices from "./components/AddServices";
// import ServicesData from "./components/Servicesdata";
// import Dashboard from "./components/Dashboard";
// import AddLead from "./components/Leads";
// import LeadData from "./components/Leadsdata";
// import AddCustomer from "./components/Customer";
// import CustomerData from "./components/Customerdata";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//       <Route path="/" element={<HomePage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Home" element={<HomePage/>} />
//         <Route path="/Admin" element={<Admin />} />
//         <Route path="/Services" element={<Services />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/checkout/:id" element={<Checkout />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/reset/:id/:token" element={<Reset />} />
//         <Route path="/services" element={<AddServices />} />
//         <Route path="/servicesdata" element={<ServicesData />} />
//         <Route path="/lead" element={<AddLead />} />
//         <Route path="/leaddata" element={<LeadData />} />
//         <Route path="/customer" element={<AddCustomer />} />
//         <Route path="/customerdata" element={<CustomerData />} />
//       </Routes>
//       <Footer />
//        {/* <DashboardLayoutBasic /> */}
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepagenew';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import Services from './pages/Services';
import Checkout from './pages/Checkout'; 
import Reset from "./components/Reset";
import AddServices from "./components/AddServices";
import ServicesData from "./components/Servicesdata";
import Dashboard from "./components/Dashboard";
import AddLead from "./components/Leads";
import LeadData from "./components/Leadsdata";
import AddCustomer from "./components/Customer";
import CustomerData from "./components/Customerdata";

function App() {
  const location = useLocation();
  
  // Define paths where Header and Footer should be hidden
  const noHeaderFooterPaths = ['/dashboard'];

  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {showHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset/:id/:token" element={<Reset />} />
        <Route path="/services" element={<AddServices />} />
        <Route path="/servicesdata" element={<ServicesData />} />
        <Route path="/lead" element={<AddLead />} />
        <Route path="/leaddata" element={<LeadData />} />
        <Route path="/customer" element={<AddCustomer />} />
        <Route path="/customerdata" element={<CustomerData />} />
      </Routes>
      
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;



