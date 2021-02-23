import React from 'react'

import DisplayForecast from './displayForecast'

const ForecastList = ({forecast}) => {
    return (
        <div>
           {forecast.map(({dt,main, weather}) => (
                <div key={dt}>
                    <DisplayForecast temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon}/>
                </div>
            ))} 
        </div>
    )
}

export default ForecastList;