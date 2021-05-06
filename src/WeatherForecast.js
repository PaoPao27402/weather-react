import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";
import Loader from "react-loader-spinner";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    // if the coordinates change --- set loaded false
    useEffect(() => {
        setLoaded(false)
        setTimeout(() => {
            let apiKey = `094780c710fa4efd669f0df8c3991927`;
            let longitude = props.coordinates.lon;
            let latitude = props.coordinates.lat;
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        }, 1000);
    }, [props.coordinates])

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast" id="forecast">
                <div className="row">
                    <span className="col-3">
                        <WeatherForecastDay data={forecast[0]} />
                    </span>
                    <span className="col-3">
                        <WeatherForecastDay data={forecast[1]} />
                    </span>
                    <span className="col-3">
                        <WeatherForecastDay data={forecast[2]} />
                    </span>
                    <span className="col-3">
                        <WeatherForecastDay data={forecast[3]} />
                    </span>
                </div>
            </div>
        )
    } else {
        
       return  <Loader
            type="Rings"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} />
    }
} 