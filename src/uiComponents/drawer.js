import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/achievements', label:'Achievements'},
    { to: '/contact', label: 'Contact' },
  ];

  const navList = (
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.label} component={Link} to={link.to}>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
    </List>
  );
  

  return (
    < div className='transparent-bar'> 
      <AppBar className='bar'>
      <Toolbar  >
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h1 style={{textAlign:'center',color:'white',fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>Reka Nagaraj</h1>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {navList}
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default DrawerComp;