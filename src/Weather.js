import React from "react";
import './Weather.css';

export default function Weather(){
    return(
        <div className="Weather">
            
                <form>
                <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter a city name..." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <input className="btn btn-outline-info" type="submit" value="Search" id="button-addon2" />
</div>
                </form>
                <br/>
                <h1>Lisbon</h1>
                <ul>
                <li>Wednesday 07:00</li>
                <li>Rain</li>   
                </ul>
                <br/>
                <div className="row">
                <div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="weather icon" /><span>6℃|</span><span className="fahrenheit secondary">℉</span>
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