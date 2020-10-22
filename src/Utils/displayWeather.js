import React from 'react'

const DisplayWeather =(props)=>{
    return (
    <React.Fragment>
    <div className="name">
            {props.city},{props.country}
        </div>
        <div className="weather-icon"> 
            <img src={"http://openweathermap.org/img/wn/" + props.icon + "@2x.png"} />
        </div>
        <div className="weather">
            <div className="main-weather">
                <span className="temperature">{props.temperature}</span>
            </div>
            <div className="minmax">
                <span className="min-max">Min {props.min}<i className="wi wi-celsius"/><br/>Max {props.max}<i className="wi wi-celsius"/></span>
            </div>
        </div>
        <div className="condition">
            {props.condition}
        </div>
        </React.Fragment>
    )}

export default DisplayWeather