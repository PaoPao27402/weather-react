import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";




export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

 function handleResponse(response){
   setWeatherData({
   ready:true,
   coordinates:response.data.coord,
   temperature:response.data.main.temp,
   wind: response.data.wind.speed,
   city: response.data.name,
   humidity: response.data.main.humidity,
   date:new Date(response.data.dt * 1000),
   icon: response.data.weather[0].icon
   });
}

function search(){
  const apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready){
 return (
    <div className="Weather">
      <div className="row">
      <form onSubmit ={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your City"
          autoFocus="off"
          onChange = {handleCityChange}
        />
         <input type="submit" value="Search" className="button" />
      </form>
      </div>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>  

  );

 } else {
   search();
    return (
      <Loader
      type="Rings"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} /> 
     );
 }
  
 }