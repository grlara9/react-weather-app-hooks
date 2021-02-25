import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DisplayForecast from './displayForecast'

const ForecastList = ({weathers}) => {
    console.log("hooa" , weathers)
    return (
        <div>
           {weathers 
           ? weathers.map(({dt,main, weather}) => (
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