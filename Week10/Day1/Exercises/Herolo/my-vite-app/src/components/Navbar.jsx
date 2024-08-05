import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Weather App
        </Typography>
        <Button component={Link} to="/" color="inherit">Weather</Button>
        <Button component={Link} to="/favorites" color="inherit">Favorites</Button>
        <Button onClick={toggleTheme} color="inherit">Toggle Theme</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;