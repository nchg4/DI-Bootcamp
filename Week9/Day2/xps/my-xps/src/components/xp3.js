import React, { useState } from 'react';

const Phone = () => {
  const [brand] = useState('Apple');
  const [model] = useState('iPhone 15+ Max');
  const [color, setColor] = useState('Space Gray');
  const [year] = useState(2024);

  const changeColor = () => {
    setColor('Black');
  }

  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '5px', width: '200px' }}>
      <h2>Phone Details</h2>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
