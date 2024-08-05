import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { TextField, Button, Grid } from '@mui/material';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const { weatherData, setWeatherData, addFavorite, removeFavorite, favorites } = useContext(WeatherContext);
  const [city, setCity] = useState('Tel Aviv');
  const [error, setError] = useState(null);

  const API_KEY = 'CKXHBFuP1ht2qmctacGjp9Tng9yOxKhL'; 

  const fetchWeather = async (city) => {
    try {
      
        
      const locationResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`);
      const locationData = await locationResponse.json();
      
      if (locationData.length === 0) {
        setError('City not found');
        return;
      }

      const locationKey = locationData[0].Key; 

      const currentWeatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
      const currentWeatherData = await currentWeatherResponse.json();

      const forecastResponse = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
      const forecastData = await forecastResponse.json();

      const combinedData = {
        city: locationData[0].LocalizedName,
        temperature: currentWeatherData[0].Temperature.Metric.Value,
        condition: currentWeatherData[0].WeatherText,
        forecast: forecastData.DailyForecasts,
      };

      setWeatherData(combinedData); 
      setError(null); 
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const isFavorite = favorites.some(fav => fav.name === city);

  return (
    <div className="container weather-container">
      <h1>Weather App</h1>
      <TextField value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search city" />
      <Button onClick={handleSearch}>Search</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      <WeatherCard data={weatherData} />
      <Button onClick={() => isFavorite ? removeFavorite(city) : addFavorite(weatherData)}> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Button>
    </div>
  );
};

export default Weather;