import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props){
function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return`${temperature}°;`}

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return`${temperature}°;`
}

function day(){
    let date = new date (props.data.dt * 1000);
    let day = date.getDay();
    let days= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    return days[day];
}

    return (
        <div className="Weatherforecastday">
        <div className="weatherforecast-day">
                        {day()}
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code={props.data.weather[0].icon} size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">{maxTemperature()}</span>
                        <span className="weatherforecast-min"> {minTemperature()}</span>
                    </div>
                    </div>
    );
}