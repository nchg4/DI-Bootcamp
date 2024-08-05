import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

function MainContent() {
  const { theme } = useTheme();
  const [message, setMessage] = useState("");
  const [currentMode, setCurrentMode] = useState("");

  const handleThemeChange = (newTheme) => {
    setMessage(`You have entered ${newTheme} mode`);
    setCurrentMode(newTheme);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const closeMessage = () => {
    setMessage("");
  };

  return (
    <div style={{ 
      backgroundColor: theme === "light" ? "#ffffff" : "#333333", 
      color: theme === "light" ? "#000000" : "#ffffff", 
      height: "100vh", 
      width: "100vw", 
      position: "relative", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <ThemeSwitcher onThemeChange={handleThemeChange} />
      {message && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme === "light" ? "#f0f0f0" : "#444444",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}>
          {message}
        </div>
      )}
      {!message && (
        <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>
          {currentMode === "light" ? "Light" : "Dark"}
        </h1>
      )}
    </div>
  );
}

export default App;