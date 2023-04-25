// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/CalendarDate.jsx
// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// export default function CalendarDate() {
//   const { date } = useParams();
//   const formattedDate = new Date(date).toDateString();
  
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchWeatherData() {
//       const response = await fetch('/api/get_weather_data/');
//       const data = await response.json();
//       setWeatherData(data);
//       setLoading(false);
//     }
//     fetchWeatherData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Calendar Date: {formattedDate}</h1>
//       <p>SIGN UP HERE! :)</p>
//       <button>Register</button>
//       <form>
//         <label htmlFor="guestVolunteer">Number of Guests</label>
//         <input
//             id="guestVolunteer"
//             tye="number"
//             min="0"
//         />
//       </form>
//       <button>Unregister</button>
//       <p>
//         current weather at Lord's dinner:
//       </p>
//       <div>
//         weather
//         {weatherData && weatherData.current ? (
//           <>
//             <h1>Weather for Wichita KS: {new Date(weatherData.current.dt * 1000).toLocaleString()}</h1>
//             <p>Temperature: {weatherData.current.temp}</p>
//             <p>Humidity: {weatherData.current.humidity}</p>
//           </>
//         ) : (
//           <p>Weather data not available</p>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// export default function CalendarDate() {
//   const { date } = useParams();
//   const formattedDate = new Date(date).toDateString();
  
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchWeatherData() {
//       const date = '2023-04-24'; // Or any other date
//       const response = await fetch(`/api/get_weather_data/${date}`);
//       const data = await response.json();
//       setWeatherData(data);
//       setLoading(false);
//     }
//     fetchWeatherData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Calendar Date: {formattedDate}</h1>
//       <p>SIGN UP HERE! :)</p>
//       <button>Register</button>
//       <form>
//         <label htmlFor="guestVolunteer">Number of Guests</label>
//         <input
//             id="guestVolunteer"
//             tye="number"
//             min="0"
//         />
//       </form>
//       <button>Unregister</button>
//       <p>
//         current weather at Lord's dinner:
//       </p>
//       <div>
//         {weatherData && weatherData.current ? (
//           <>
//             <h1>Weather for Wichtia KS:{weatherData.current.dt}</h1>
//             <p>Temperature: {weatherData.current.temp}</p>
//             <p>Humidity: {weatherData.current.humidity}</p>
//           </>
//         ) : (
//           <p>Weather data not available</p>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';


// export default function CalendarDate() {
//   const { date } = useParams();
//   const formattedDate = new Date(date).toDateString();

//   return (
//     <div>
//       <h1>Calendar Date: {formattedDate}</h1>
//       <p>SIGN UP HERE! :)</p>
//       <button>Register</button>
//       <form>
//         <label htmlFor="guestVolunteer">Number of Guests</label>
//         <input
//             id="guestVolunteer"
//             tye="number"
//             min="0"
//         />
//       </form>
//       <button>Unregister</button>
//       <p>
//         current weather at Lord's dinner:
//       </p>
//     </div>
//   );
// }

import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function CalendarDate() {
  const { date } = useParams();
  const formattedDate = new Date(date).toDateString();
  
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeatherData() {
      // const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      const apiKey = 'f23a948be9ca93552f3ac7fd9ec0d17a'
      const city = 'Wichita';
      const countryCode = 'us';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`);
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    }
    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Calendar Date: {formattedDate}</h1>
      <p>SIGN UP HERE! :)</p>
      <button>Register</button>
      <form>
        <label htmlFor="guestVolunteer">Number of Guests</label>
        <input
            id="guestVolunteer"
            type="number"
            min="0"
        />
      </form>
      <button>Unregister</button>
      <p>Current weather at Lord's dinner:</p>
      {weatherData && (
        <div>
          <h1>Weather for Wichita, KS:</h1>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}


