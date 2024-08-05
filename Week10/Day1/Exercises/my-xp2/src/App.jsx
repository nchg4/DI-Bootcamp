import React, { useRef, useState } from "react";
import "./App.css";

function CharacterCounter() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0); // State to hold character count

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCharCount(textLength); // Update character count
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onInput={handleInputChange} // Use onInput instead of onChange
        placeholder="Type something..."></textarea>
      <p>Character Count: {charCount}</p> {/* Display character count */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;