import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(){
    return(
        <div className="WeatherForecast" id="forecast">
         <div className="row">  
        <span className="col-3">
          <span className="card-body">
            <h4 className="card-title" id="day-one">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon code="01d" size={52}/>
            </h5>
            <p className="temp-day-one">0°C</p>
          </span>
        </span>
        <span className="col-3">
          <span className="card-body">
            <h4 className="card-title" id="day-two">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon code="01d" size={52}/>
            </h5>
            <p className="temp-day-two">0°C</p>
          </span>
        </span>
        <span className="col-3">
          <span className="card-body">
            <h4 className="card-title" id="day-three">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon code="01d" size={52}/>
            </h5>
            <p className="temp-day-three">0°C</p>
          </span>
        </span>
        <span className="col-3">
          <span className="card-body">
            <h4 className="card-title" id="day-four">
              00:00
              </h4>
            <h5 className="weather-icon">
            <WeatherIcon code="01d" size={52}/>
            </h5>
            <p className="temp-day-four">0°C</p>
          </span>
        </span>
        </div> 
      </div>

    );
}