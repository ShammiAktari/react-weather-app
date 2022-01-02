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

    return (
        <div className="Weatherforecastday">
        <div className="weatherforecast-day">
                        {props.data.dt}
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