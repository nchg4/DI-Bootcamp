import React from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = ({ selectedDay, onSelectDay }) => {
  return (
    <Calendar
      onChange={onSelectDay}
      value={new Date(selectedDay)}
    />
  );
};

export default CalendarComponent;