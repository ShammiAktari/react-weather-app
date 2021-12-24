import React from "react";
import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            
                <form>
                <div className="row">
                    <div className="col-9">
                    <input type="search" placeholder="enter your city name"
                    className="control-form"/>
                   
                    </div>
                    
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn-primary"/></div>
                    </div>    
                </form>
                <br/>
                <h1>Lisbon</h1>
                <ul>
                <li>Wednesday 07:00</li>
                <li>Raining</li>   
                </ul>
                <div className="row">
                <div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="weather icon" /><span>6℃</span>
                </div>
                
                
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 97%</li>
                            <li>Humidity: 84%</li>
                            <li>Wind: 18 km/h</li>
                        </ul>
                    </div>
                    </div>
                
</div>
            
        
    );
}