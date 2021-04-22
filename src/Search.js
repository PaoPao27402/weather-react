import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate"




export default function Search() {
  const [weatherData, setWeatherData] = useState({ready: false})

function handleResponse(response){
console.log(response.data);
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  wind: response.data.wind.speed,
  city: response.data.name,
  humidity: response.data.main.humidity,
  date:new Date(response.data.dt * 1000)

});

}

if (weatherData.ready){
 return (
    <div className="Weather">
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter your City"
          autoFocus="off"
          autoComplete="off"
          id="city-input"
        />
        <input type="submit" value="search" className="button" />
      </form>
      <h1>
       <strong>{weatherData.city}</strong>
      </h1>
      <div className="data" id="todaydata"></div>
       <p className="time" id="day-time"><FormattedDate date={weatherData.date}/></p>
      <span className="temperature">
      <WeatherIcon icon="CLEAR_DAY" size="75"/>
        <span>{Math.round(weatherData.temperature)}</span>
        <span className="units">
          <a href="/" id="celsius-link" className="active">
            °C
            </a>
            |
            <a href="/" id="fahrenheit-link" className="weak">
            °F
            </a>
        </span>
      </span>
      <ul>
        <li>
        <WeatherIcon icon="RAIN" size="18"/>  <span id="humidity">{Math.round(weatherData.humidity)}</span>% 
        </li>
        <li>
        <WeatherIcon icon="WIND" size="18"/>  <span id="wind-speed">{Math.round(weatherData.wind)}</span>km/h 
        </li>
      </ul>
      <h3 id="description">Today</h3>
      <br />
      <div className="row" id="forecast">
        <div className="col-3">
          <div className="card-body">
            <h4 className="card-title" id="day-one">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon icon="CLEAR_DAY" size="50"/>
            </h5>
            <p className="temp-day-one">0°C</p>
          </div>
        </div>
        <div className="col-3">
          <div className="card-body">
            <h4 className="card-title" id="day-two">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon icon="CLEAR_DAY" size="50"/>
            </h5>
            <p className="temp-day-two">0°C</p>
          </div>
        </div>
        <div className="col-3">
          <div className="card-body">
            <h4 className="card-title" id="day-three">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon icon="CLEAR_DAY" size="50"/>
            </h5>
            <p className="temp-day-three">0°C</p>
          </div>
        </div>
        <div className="col-3">
          <div className="card-body">
            <h4 className="card-title" id="day-four">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon icon="CLEAR_DAY" size="50"/>
            </h5>
            <p className="temp-day-four">0°C</p>
          </div>
        </div>
      </div>
      <div className="boton">
        <button className="current" id="current-location-button">
          current
          </button>
      </div>
    </div>
  );
} else {
 const apiKey = "094780c710fa4efd669f0df8c3991927";
  let city = "city"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return (
      <Loader
      type="Rings"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} 
    />
  );
}
  
 }