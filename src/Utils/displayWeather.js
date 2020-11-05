import React from 'react'
import './displayWeather.css'
import { convertToFahrenheit } from './functions';
import {  convertKelvinToCelsius } from './functions'

const DisplayWeather =({city, country, icon, temperature, min, max, condition , degreeType})=>{
    
    return (
        <React.Fragment>
            <div className="name">
                {city},{country}
            </div>
            <div className="weather-icon"> 
                <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} />
            </div>
            <div className="weather">
                <div className="main-weather">
                <span className="temperature">{degreeType === "celsius" ?  convertKelvinToCelsius(temperature) +  "°C" : convertToFahrenheit(temperature) + "°F"}</span>
                
            </div>
            <div className="minmax">
                <span className="min-max">Min {degreeType === "celsius" ?  convertKelvinToCelsius(min) +  "°C" : convertToFahrenheit(min) + "°F"}
                Max {max}&deg;</span>
            </div>
            </div>
            <div className="condition">
                {condition}
            </div>
            
        </React.Fragment>
    )}
export default DisplayWeather