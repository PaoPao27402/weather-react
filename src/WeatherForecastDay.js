import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C `;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecast" id="forecast">
         <span className="card-body">
       <h4 className="card-title" id="day-one">
       {day()}
         </h4>
       <h5 className="weather-icon">
       <WeatherIcon code={props.data.weather[0].icon} size={52}/>
       </h5>
       <p className="temp-day-one">{maxTemperature()}</p>
     </span>
   </div>
  );
}