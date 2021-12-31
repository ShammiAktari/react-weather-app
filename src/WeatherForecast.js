import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props){
function getResponse(response){
console.log(response.data);
}

console.log(props);

    let apiKey = "4ef1e54a9a52c90543ac2a54b2d5a60b";
    let latitude = props.coordinets.lat;
    let longitude = props.coordinets.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(getResponse);

    return(
        <div className="weatherforecast">
       
            <div className="row mt-5">
                <div className="col">
                    <div className="weatherforecast-day">
                        Thu
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>

                <div className="col">
                    <div className="weatherforecast-day">
                        Fri
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>

                <div className="col">
                    <div className="weatherforecast-day">
                        Sat
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>

                <div className="col">
                    <div className="weatherforecast-day">
                        Sun
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>

                <div className="col">
                    <div className="weatherforecast-day">
                        Mon
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>

                <div className="col">
                    <div className="weatherforecast-day">
                        Tue
                    </div>
                    <div className="weatherforcast-icon mt-5">
                        <WeatherIcon code="01d" size={38} color="#0DCAF0" />
                    </div>
                    <div className="weatherforcast-temperatures mt-3">
                        <span className="weatherforecast-max">19°</span>
                        <span className="weatherforecast-min"> 10°</span>
                    </div>
                </div>
        </div>
</div>
        );

}
