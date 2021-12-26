import React from "react";
import FormattedDate from "./FormattedDate";

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
            
<img src={props.data.iconUrl} alt="weather-icon" />
<span className="temperature">{Math.round(props.data.temperature)}</span><span className="celcius">℃|</span><span className="fahrenheit">℉</span>
        </div>
        
        
        
            <div className="col-6">
                <ul>
                    
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
            </div>
        
    </div>

);
}