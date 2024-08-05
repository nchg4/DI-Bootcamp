import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Favorites.css'; // Import your CSS file

const Favorites = () => {
  const { favorites } = useContext(WeatherContext);
  const navigate = useNavigate();

  return (
    <div className="container favorites-list">
      <h1>Favorites</h1>
      <List>
        {favorites.map((fav) => (
          <ListItem button key={fav.id} onClick={() => navigate(`/weather/${fav.id}`)}>
            <ListItemText primary={fav.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Favorites;