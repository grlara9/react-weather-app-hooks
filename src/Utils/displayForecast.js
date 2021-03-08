import React from 'react';
import { convertToFahrenheit } from './functions';
import {  convertKelvinToCelsius } from './functions'
import './displayForecast.css'

const DisplayForecast = ({dt, temp_min, temp_max, main, icon, degreeType}) => {
   
  // create a date object with Date class constructor
  const date = new Date(dt);

  
  return (
    
   <div className="card-container">

    <div className="card">
      <img className="card-img"
        
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
        <div className="card-title">
          {main}
        </div>
      <div className="card-body">
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>

        {/* minimum temperature */}
       
        {/* maximum temperature */}
        

        Min {degreeType === "celsius" ?  convertKelvinToCelsius(temp_min) +  "°C" : convertToFahrenheit(temp_min) + "°F"}
                    <br /> 
        Max {degreeType === "celsius" ?  convertKelvinToCelsius(temp_max) +  "°C" : convertToFahrenheit(temp_max) + "°F"}
      </div>
    </div>
    </div> 
  );
};
export default DisplayForecast;