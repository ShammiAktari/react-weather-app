import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./WeatherForecast"
import './Weather.css';

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState (props.city);


    function getTemperature(response){
        console.log(response.data);
        setWeatherData({
            ready : true,
          temperature:  response.data.main.temp,
          city: response.data.name,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          humidity : response.data.main.humidity,
          wind: response.data.wind.speed,
          icon : response.data.weather[0].icon,
        });
    
        
    }

    function search(){
        const apiKey="4ef1e54a9a52c90543ac2a54b2d5a60b";
        const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(getTemperature);
    }

  function handleSubmit(event){
      event.preventDefault();
      search ();
  }  

  function getCityChange(event){
      setCity(event.target.value);
  }



if(weatherData.ready){
    return(
        <div className="Weather">
            
                <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
  <input 
  type="text" className="form-control" placeholder="Enter a city name..."  autoFocus="on" onChange={getCityChange}/>

  <input className="btn btn-outline-info" type="submit" value="Search" id="button-addon2" />
</div>
                </form>
                <br/>
                <WeatherInfo data={weatherData} />
                <WeatherForecast />
     </div>
     );           
}else{  
    
    search();
    return("Loading....");    
}

}
