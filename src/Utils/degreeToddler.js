import React from 'react'

const Toggler =()=>{
return (
    <React.Fragment>
        <div className="form-check form-check-inline">
            <input
            class="form-check-input"
            type="radio"
            name="degree-type"
            id="celsius"
            value="metric"
            />
            <label class="form-check-label" for="celsius">Celsius</label>
        </div>
        <div className="form-check form-check-inline">
            <input
            class="form-check-input"
            type="radio"
            name="degree-type"
            id="farenheit"
            value="imperial"
            />
            <label class="form-check-label" for="farenheit">Farenheit</label>
        </div>
    </React.Fragment>
  )
}
export default Toggler