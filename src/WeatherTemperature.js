import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState ("celcius");


    function getFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
 function getCelcius(event){
     event.preventDefault();
     setUnit ("celcius");
 }
if (unit==="celcius"){
    
    return(
        <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span><span className="celcius">℃ |</span><span className="fahrenheit"><a href="/" onClick={getFahrenheit}>℉</a></span>
        </span>);
        }else{
            let fahrenheit = (props.celcius * 9/5) +32;
            return(
            <span className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span><span className="celcius"><a href="/" onClick={getCelcius}>℃</a>|</span><span className="fahrenheit">℉</span>
            </span>);

        }
    
}