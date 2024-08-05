import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addFavorite = (location) => {
    setFavorites((prev) => [...prev, location]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <WeatherContext.Provider value={{ favorites, addFavorite, removeFavorite, weatherData, setWeatherData, loading, setLoading, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};
