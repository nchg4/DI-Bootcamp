import React, { useState } from 'react';

const DynamicButton = ({ initialText, onClick }) => {
  const [buttonText, setButtonText] = useState(initialText);

  const handleClick = () => {
    onClick();
    setButtonText(prevText => prevText === '+' ? '-' : '+');
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};

export default DynamicButton;
