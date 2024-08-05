import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import Navbar from './components/Navbar'; // Updated import to Navbar
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import './App.css'; // Import your CSS file

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <WeatherProvider>
      <Router>
        <Navbar toggleTheme={toggleTheme} /> {/* Using the Navbar */}
        <div className="container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Weather />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </Router>
    </WeatherProvider>
  );
};

export default App;