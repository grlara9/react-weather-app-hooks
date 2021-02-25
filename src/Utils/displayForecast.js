import React from 'react';
import {Card} from 'react-bootstrap';
import './displayForecast.css'

const DisplayForecast = ({dt, temp_min, temp_max, main, icon}) => {
   
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <div className="card">
      <div className="card-img"
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div className="card-body">
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </div>
    </div>
  );
};
export default DisplayForecast;