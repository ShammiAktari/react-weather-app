import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";



export default function WeatherForecast(){
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
