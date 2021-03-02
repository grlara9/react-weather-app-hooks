import React from 'react'
import DisplayForecast from './displayForecast'
import { convertToFahrenheit } from './functions';
import {  convertKelvinToCelsius } from './functions'
import '../Components/Forecast.css'
const ForecastList = ({weathers}) => {
    console.log("hooa" , weathers)
    return (
        <div className="main-forecast">
           {weathers 
           ? weathers.slice(0,4).map(({dt,main, weather}) => (
              <div key={dt}>
                   
                  <DisplayForecast 
                        
                        temp_max={main.temp_max} 
                        temp_min={main.temp_min} 
                        dt={dt * 1000} 
                        main={weather[0].main} 
                        icon={weather[0].icon}/>
                        
                        
                </div>
            )
            ):"not working"}
        </div>
    )
}
export default ForecastList