import React from 'react';

const Calendar = ({ selectedDay, onSelectDay }) => {
  const handleChange = (event) => {
    onSelectDay(event.target.value);
  };

  return (
    <div className="calendar">
      <input
        type="date"
        value={selectedDay}
        onChange={handleChange}
      />
    </div>
  );
};

export default Calendar;
