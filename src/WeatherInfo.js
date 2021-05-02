import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";




export default function WeatherInfo(props){
return(
    <div className = "WeatherInfo">
        <h1>
        <strong>{props.data.city}</strong>
        </h1>
       <div className="data" id="todaydata"></div>
        <p className="time" id="day-time"><FormattedDate date={props.data.date}/></p>
       <span className="temperature">
         <WeatherIcon code={props.data.icon} size={82}/>
         <WeatherTemperature celsius={props.data.temperature} />
       </span>
       <ul>
         <li>
         <WeatherIcon code="09d" size={18}/><span id="humidity">{Math.round(props.data.humidity)}</span>% 
         </li>
         <li>
         <WeatherIcon code="50n" size={18}/><span id="wind-speed">{Math.round(props.data.wind)}</span>km/h 
         </li>
       </ul>
       <h3 id="description">Today</h3>
       <br />
       <div className="boton">
         <button className="current" id="current-location-button">
           current
           </button>
       </div>
    </div>
    );

}