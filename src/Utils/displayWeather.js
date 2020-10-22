import React from 'react'

const DisplayWeather =(props)=>{
    <React.Fragment>
    <div className="name">
            {props.city},{props.country}
        </div>
        <div className="weather-icon"> 
            <img src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"} />
        </div>
        <div className="weather">
            <div className="main-weather">
                <span className="temperature">{temp}</span>
            </div>
            <div className="minmax">
                <span className="min-max">Min {min}<i className="wi wi-celsius"/><br/>Max {max}<i className="wi wi-celsius"/></span>
            </div>
        </div>
        <div className="condition">
            {condition}
        </div>
        </React.Fragment>
}

export default DisplayWeather