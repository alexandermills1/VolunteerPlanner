// /Users/alexandermills/Documents/personal_projects/VolunteerPlanner/VP-react/src/components/CalendarDate.jsx
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./Button.css";
import "./Input.css";
// * * * * * * * * * * * * * * * * * * * * * * * * 
import axios from 'axios';
// * * * * * * * * * * * * * * * * * * * * * * * * 



export default function CalendarDate() {
  const { date } = useParams();
  const formattedDate = new Date(date).toDateString();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // * * * * * * * * * * * * * * * * * * * * * * * * 

  // * * * * * * * * * * * * * * * * * * * * * * * * 

  useEffect(() => {
    async function fetchWeatherData() {
      // const apiKey = 'YOUR_API_KEY'; // Replace with your API key
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
  // * * * * * * * * * * * * * * * * * * * * * * * * 
  const handleRegisterClick = async () => {
    try {
      const isoDate = new Date(date).toISOString().split('T')[0]; // Convert date to ISO format and extract date part
      const postData = {
        date: isoDate,
        num_guests: document.getElementById("guestVolunteer").value,
      };
  
      console.log("Data to be sent:", postData);
  
      const response = await axios.post("/register_volunteer/", postData);
  
      console.log("Response received:", response.data);
  
      if (response.data.message) {
        alert(response.data.message);
      } else if (response.data.error) {
        alert(response.data.error);
      }
    } catch (error) {
      console.log("Error occurred:", error);
      alert("Error occurred: " + error);
    }
  };
  // this is correctly POST to the db but it is buggy. 
  // bugs to fix need to have 
  
  
  // * * * * * * * * * * * * * * * * * * * * * * * * 

  if (loading) {
    return <div>Loading... </div>;
  }

  return (
    <div>
      <h1>Calendar Date: {formattedDate}</h1>
      {/* example date as seen on the website "Tue Apr 25 2023"*/}
      <p>SIGN UP HERE! :)</p>
      {/* <button>Register</button> */}
      <input 
        type="Register" 
        value="Register" 
        className="nav-button"
        onClick={handleRegisterClick}
      />
      <form>
        <label htmlFor="guestVolunteer">Number of Guests</label>
        <input
          id="guestVolunteer"
          type="number"
          min="0"
          defaultValue="0"
          className="input-field"
        />
      </form>
      {/* <button>Unregister</button> */}
      <input type="Unregister" 
      value="Unregister" 
      className="nav-button"/>
      
      {weatherData && (
        <div>
          <h1>Current weather at Lord's Diner (Wichita, KS):</h1>
          <h3>Temperature: {weatherData.main.temp}°F</h3>
          <h3>Humidity: {weatherData.main.humidity}%</h3>
        </div>
      )}

    </div>
  );
}


