// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/CalendarDate.jsx


import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function CalendarDate() {
  const { date } = useParams();
  const formattedDate = new Date(date).toDateString();
  
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeatherData() {
      const apiKey = 'YOUR_API_KEY'; // Replace with your API key
      // const apiKey = ''
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


