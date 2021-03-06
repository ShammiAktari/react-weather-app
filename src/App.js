import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather city="Lisbon"/>
      </div>
    
      <footer>
        <p>This was coded by <a href="https://www.linkedin.com/in/shammiaktari/" target="_blank" rel="noopener noreferrer">Shammi Aktari</a>  and 
        <a href="https://github.com/ShammiAktari/react-weather-app" target="_blank" rel="noopener noreferrer"> open-sourece on GitHub</a>.</p>
      </footer>
      
    </div>
  );
}


