import React from "react";

export default function weather() {
    let weatherData = { city: "City", temp: "0" };
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
        <p className="time" id="day-time"></p>
        <span className="temperature">
          <i className="far fa-sun" id="main-icon"></i>
          <span>{weatherData.temp}</span>
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
            <span id="humidity">0</span>% <i className="fas fa-cloud-rain"></i>
          </li>
          <li>
            <span id="wind-speed">0</span>km/h <i className="fas fa-wind"></i>
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
                <i className="fas fa-cloud"></i>
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
                <i className="fas fa-cloud-sun"></i>
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
                <i className="fas fa-cloud"></i>
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
                <i className="fas fa-cloud-sun"></i>
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