import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props){
const [loaded, setLoaded]= useState(false);
const [forecast, setForecast]= useState (null);

useEffect(()=>{
    setLoaded(false);
},[props.coordinets]);

function getResponse(response){
setForecast(response.data.daily);
setLoaded (true);
}



if (loaded){
    return(
        <div className="weatherforecast">
       
            <div className="row mt-5">
                {forecast.map(function(dailyForecast,index){
                    if(index<5){
                      return(<div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast}/> 
                  </div>
                  );
                    }else{
                        return null;
                    }
                    
                })}
                
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
