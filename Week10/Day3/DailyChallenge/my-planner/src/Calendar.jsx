import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'; // Import the CSS for calendar styles

const CalendarComponent = ({ selectedDay, onSelectDay }) => {
  return (
    <div className="calendar">
      <Calendar
        onChange={onSelectDay}
        value={new Date(selectedDay)}
        tileClassName={({ date }) => {
          // Highlight the selected day
          if (date.toISOString().split('T')[0] === selectedDay) {
            return 'highlighted-day'; // Apply the highlighted-day class
          }
          return null;
        }}
      />
    </div>
  );
};

export default CalendarComponent;