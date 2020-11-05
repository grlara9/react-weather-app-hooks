import React from 'react'
import './degreeToddler.css'
const Toggler =(props)=>{

    const updateForecastDegree = e => {
        
        props.setDegreeType(e.target.value)
      }

return (
    <div className="container">
        <label className="radio radio-gradient">
            <span className="radio-input">
            <input
            className="radio__control"
            className="form-check-input"
            type="radio"
            name="degree-type"
            id="celsius"
            value="celsius"
            checked={props.degreeType === "celsius"}
            onChange={updateForecastDegree}
            />
           
            </span>

            <span class="radio__label" for="celsius">Celsius</span>
        </label>

        <label className="radio radio-gradient">
            <span className="radio-input">
            <input
            class="form-check-input"
            type="radio"
            name="degree-type"
            id="celsius"
            value="fahrenheit"
            checked={props.degreeType === "fahrenheit"}
            onChange={updateForecastDegree}
            />
            
            </span>

            <span class="radio__label" for="fahrenheit">Fahrenheit</span>
        </label>
    </div>
  )
}
export default Toggler