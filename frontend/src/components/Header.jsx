// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about-us">About Us</Link>
//         <Link to="/contact-us">Contact Us</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign Up</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           E-Commerce
//         </Typography>
//         <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
//           Home
//         </Link>
//         <Link to="/Admin" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
//           Shop
//         </Link>
//         <Link to="/Services" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
//           Services
//         </Link>
//         <Link to="/about-us" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
//           About Us
//         </Link>
//         <Link to="/contact-us" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
//           Contact Us
//         </Link>
//         <IconButton
//           size="large"
//           edge="end"
//           color="inherit"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleMenu}
//         >
//           <AccountCircle />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>
//             <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Login
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Sign Up
//             </Link>
//           </MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Retrieve the username from localStorage
  const username = localStorage.getItem('username');

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Electrosphere
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/Admin" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Shop
        </Link>
        <Link to="/Services" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Services
        </Link>
        <Link to="/about-us" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          About Us
        </Link>
        <Link to="/contact-us" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
          Contact Us
        </Link>
        
        {username ? (
          // If the user is logged in, show the username and account icon
          <>
            <Typography variant="body1" component="div" sx={{ marginRight: '20px' }}>
              Welcome, {username}!
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={() => {
                localStorage.clear(); // Clear localStorage on logout
                handleClose();
              }}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          // If the user is not logged in, show login and sign-up options
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Login
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Sign Up
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
