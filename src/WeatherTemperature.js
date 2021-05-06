import React, { useState } from "react";


export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div className="units">
        <span className="temperature">{Math.round(props.celsius)}
        </span>
        <span>
          <a href="/" className="active">
            °C
             </a>
             |
             <a href="/" onClick={convertToFahrenheit} className="weak">
            °F
             </a>
        </span>
      </div>
    );
  } else {
    return (
      <span className="units">
        <span className="tempperature">{Math.round(fahrenheit())}
        </span>
        <span>
          <a href="/" onClick={convertToCelsius} className="active">
            °C
           </a>
           |
           <a href="/" className="weak">
            °F
           </a>
        </span>
      </span>
    );
  }
}