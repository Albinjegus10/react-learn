// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles'; // Correct import
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';

// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'orders',
//     title: 'Orders',
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     kind: 'divider',
//   },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },
//   {
//     segment: 'reports',
//     title: 'Reports',
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: 'sales',
//         title: 'Sales',
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: 'traffic',
//         title: 'Traffic',
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: 'integrations',
//     title: 'Integrations',
//     icon: <LayersIcon />,
//   },
// ];

// const demoTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2', // Primary color
//     },
//     secondary: {
//       main: '#dc004e', // Secondary color
//     },
//     background: {
//       default: '#f5f5f5', // Default background color
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h1: {
//       fontSize: '2rem',
//     },
//     h2: {
//       fontSize: '1.5rem',
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="h4">Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

// function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const [pathname, setPathname] = React.useState('/dashboard');

//   const router = React.useMemo(() => ({
//     pathname,
//     searchParams: new URLSearchParams(),
//     navigate: (path) => setPathname(String(path)),
//   }), [pathname]);

//   const demoWindow = window !== undefined ? window() : undefined;

//   return (
//     <ThemeProvider theme={demoTheme}>
//       <AppProvider
//         navigation={NAVIGATION}
//         router={router}
//         window={demoWindow}
//       >
//         <DashboardLayout>
//           <DemoPageContent pathname={pathname} />
//         </DashboardLayout>
//       </AppProvider>
//     </ThemeProvider>
//   );
// }

// DashboardLayoutBasic.propTypes = {
//   window: PropTypes.func,
// };

// export default DashboardLayoutBasic;
