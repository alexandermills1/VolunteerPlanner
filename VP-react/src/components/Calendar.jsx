// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/Calendar.jsx
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// this has the calendar date on click take them to CalendarDate.jsx
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

export function CalendarComponent() {
  const navigate = useNavigate();

  const handleDateClick = (day) => {
    navigate(`/calendar-date/${day.toISOString()}`);
  };

  return (
    <div className='app'>
      {/* <h1 className='text-center'>React Calendar</h1> */}
      <div className='calendar-container'>
        <ReactCalendar onClickDay={handleDateClick} />
      </div>
    </div>
  );
}


