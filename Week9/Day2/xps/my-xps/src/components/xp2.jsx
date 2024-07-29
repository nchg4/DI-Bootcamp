import React, { useState } from 'react';

const Events = () => {
  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
