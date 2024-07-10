import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Link } from 'react-router-dom';

const drawerWidth = 280;

export default function DenseAppBar({title}) {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        variant="temporary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust opacity here
            backdropFilter: 'blur(8px) saturate(180%)',
            backdropBlendMode: 'lighten',
          },
        }}
      >
        <Typography variant="h6" color="inherit" component="div" sx={{ padding: 2 }}>
          Menu
        </Typography>
        <List>
          <ListItem button onClick={handleDrawerClose} sx={{ mb: 5 }}>
            <ListItemIcon sx={{ mr: 1 }}>
              <Diversity1Icon />
            </ListItemIcon>
            <Link to="/main-page" style={{ textDecoration: 'none' }}>
              <ListItemText primary="View all Patients" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose} sx={{ mb: 5 }}>
            <ListItemIcon sx={{ mr: 1 }}>
              <ArticleIcon />
            </ListItemIcon>
            <Link to="/todays-report" style={{ textDecoration: 'none' }}>
              <ListItemText primary="Today's INR Report" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose} sx={{ mb: 5 }}>
            <ListItemIcon sx={{ mr: 1 }}>
              <PersonAddAlt1Icon />
            </ListItemIcon>
            <Link to="/add-patient" style={{ textDecoration: 'none' }}>
              <ListItemText primary="Add new Patient" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
