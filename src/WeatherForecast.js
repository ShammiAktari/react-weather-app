import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props){
const [loaded, setLoaded]= useState(false);
const [forecast, setForecast]= useState (null);

function getResponse(response){
setForecast(response.data.daily);
setLoaded (true);
}



if (loaded){
    return(
        <div className="weatherforecast">
       
            <div className="row mt-5">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]}/>
                    
                </div>
</div>
</div>
        );

}else{
    let apiKey = "4ef1e54a9a52c90543ac2a54b2d5a60b";
    let latitude = props.coordinets.lat;
    let longitude = props.coordinets.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getResponse);

return null;

   
    }

    }
