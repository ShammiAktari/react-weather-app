import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
        <li>
<FormattedDate date={props.data.date}/>
        </li>
        <li className="text-capitalize">{props.data.description}</li>   
        </ul>
        <br/>
        <div className="row">
        <div className="col-6">
       <WeatherIcon code={props.data.icon} size={52} color="black"/>    
<WeatherTemperature celcius={props.data.temperature} />

        </div>
        
        
        
            <div className="col-6">
                <ul>
                    
                    <li className="humidity">Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
            </div>
        
    </div>

);
}