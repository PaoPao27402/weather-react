import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon";



export default function WeatherInfo(props){
return(
    <div className = "WeatherInfo">
        <h1>
        <strong>{props.data.city}</strong>
        </h1>
       <div className="data" id="todaydata"></div>
        <p className="time" id="day-time"><FormattedDate date={props.data.date}/></p>
       <span className="temperature">
       <WeatherIcon icon="CLEAR_DAY" size="75"/>
         <span>{Math.round(props.data.temperature)}</span>
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
         <WeatherIcon icon="RAIN" size="18"/>  <span id="humidity">{Math.round(props.data.humidity)}</span>% 
         </li>
         <li>
         <WeatherIcon icon="WIND" size="18"/>  <span id="wind-speed">{Math.round(props.data.wind)}</span>km/h 
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

}