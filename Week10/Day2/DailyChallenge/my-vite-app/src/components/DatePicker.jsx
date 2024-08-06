import React, { useState } from 'react';

const DatePicker = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
    onSelectDate(e.target.value);
  };

  return (
    <input type="date" value={selectedDate} onChange={handleChange} />
  );
};

export default DatePicker;