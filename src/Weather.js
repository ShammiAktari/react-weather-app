import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready: false});
    function getTemperature(response){
        console.log(response.data);
        setWeatherData({
            ready : true,
          temperature:  response.data.main.temp,
          city: response.data.name,
          description: response.data.weather[0].description,
          humidity : response.data.main.humidity,
          wind: response.data.wind.speed,
          iconUrl : `https://ssl.gstatic.com/onebox/weather/64/rain.png`
        });
    
        
    }
if(weatherData.ready){
    return(
        <div className="Weather">
            
                <form>
                <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter a city name..." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <input className="btn btn-outline-info" type="submit" value="Search" id="button-addon2" />
</div>
                </form>
                <br/>
                <h1>{weatherData.city}</h1>
                <ul>
                <li>Wednesday 07:00</li>
                <li className="text-capitalize">{weatherData.description}</li>   
                </ul>
                <br/>
                <div className="row">
                <div className="col-6">
                    
<img src={weatherData.iconUrl} alt="weather-icon" />
<span className="temperature">{Math.round(weatherData.temperature)}</span><span className="celcius">℃|</span><span className="fahrenheit">℉</span>
                </div>
                
                
                
                    <div className="col-6">
                        <ul>
                            
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                    </div>
                
            </div>
        
    );
}else{
    
    
    const apiKey="4ef1e54a9a52c90543ac2a54b2d5a60b";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(getTemperature);
    
    return("Loading....");    
}

}
