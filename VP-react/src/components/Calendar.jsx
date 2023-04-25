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
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <ReactCalendar onClickDay={handleDateClick} />
      </div>
    </div>
  );
}





// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// this has the calendar date
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// import { useState } from 'react';
// import ReactCalendar from 'react-calendar';

// export function CalendarComponent() {
//   const [date, setDate] = useState(new Date());

//   const handleDateClick = (day) => {
//     setDate(day);
//   };

//   return (
//     <div className='app'>
//       <h1 className='text-center'>React Calendar</h1>
//       <div className='calendar-container'>
//         <ReactCalendar onClickDay={handleDateClick} value={date} />
//       </div>
//       <p className='text-center'>
//         <span className='bold'>Selected Date:</span> {date.toDateString()}
//       </p>
//     </div>
//   );
// }



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
// this has the calendar date, number of volunters and weather
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// import { useState } from 'react';
// import { format } from 'date-fns'; // add this line
// import ReactCalendar from 'react-calendar';


// export function CalendarComponent({ onDateClick }) {
//   // const [date, setDate] = useState(new Date());

//   // const handleDateClick = async (day) => {
//   //   try {
//   //     const response = await fetch(`/volunteers_count/${format(day, "yyyy-MM-dd")}/`, {
//   //       method: "GET",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         "Authorization": `Token ${localStorage.getItem("token")}`,
//   //       },
//   //     });
//   //     const data = await response.json();

//   //     if (data.volunteers_count !== undefined) {
//   //       console.log('total number of volunteers ',data.volunteers_count, 'for ...date...'); // Log the number of volunteers to the console
//   //       onDateClick(day, data.volunteers_count);
//   //     } else {
//   //       console.error("Error fetching volunteers count:", data.error);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error fetching volunteers count:", error);
//   //   }
//   // };

//   const handleDateClick = async (day) => {
//     try {
//       const response = await fetch(`/volunteers_count/${format(day, "yyyy-MM-dd")}/`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Token ${localStorage.getItem("token")}`,
//         },
//       });
//       const data = await response.json();
  
//       if (data.volunteers_count !== undefined) {
//         const lat = 37.6872;
//         const lon = -97.3301;
//         // const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
//         const apiKey = 'insert api key here * * * * * * '
//         console.log('apiKey right hereh --->',apiKey);
//         const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//         const weatherData = await weatherResponse.json();
//         const tempF = (weatherData.main.temp - 273.15) * 9/5 + 32; // Convert from Kelvin to Fahrenheit
//         console.log('total number of volunteers ',data.volunteers_count, 'for', format(day, "yyyy-MM-dd"));
//         console.log('Weather:', weatherData.weather[0].description, 'Temperature:', tempF.toFixed(1), '°F');
//         onDateClick(day, data.volunteers_count);
//       } else {
//         console.error("Error fetching volunteers count:", data.error);
//       }
//     } catch (error) {
//       console.error("Error fetching volunteers count:", error);
//     }
//   };
  

//   return (
//     <div className='app'>
      
//       <h1 className='text-center'>React Calendar</h1>
      
//       <div className='calendar-container'>
//         <ReactCalendar onClickDay={handleDateClick} onChange={setDate} value={date} />
//       </div>
      
//       <p className='text-center'>
//         <span className='bold'>Selected Date:</span>{' '}
//         {date.toDateString()}
//       </p>

//     </div>
//   );
// }

