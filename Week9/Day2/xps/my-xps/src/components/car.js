/**xp1 */
import React, { useState } from 'react';
import Garage from './garge';

function Car({ carInfo }) {
  const [color, setColor] = useState('red');

  const changeColor = () => {
    setColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div>
      <h1>This car is a {color} {carInfo.model}</h1>
      <button onClick={changeColor}>Change Color</button>
      <Garage size="small" />
    </div>
  );
}

export default Car;