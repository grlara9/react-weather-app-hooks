import React from 'react'
import moment from 'moment';

const DisplayForecast = ({listData}) => (

    
    
    <div className="forecast__h">

        {listData.map((day, index) => {
						let dayNight = '';
						if (
							parseInt(moment(day.dt_txt).format('HH')) <= 6 ||
							parseInt(moment(day.dt_txt).format('HH')) >= 19
						) {
							dayNight = 'night';
						} else {
							dayNight = 'day';
						}
						return (
							<div key={index} className="forecast-cell">
								<h5>{moment(day.dt_txt).format('ddd, hA')}</h5>
								{dayNight === 'night' ? (
									<i className={`wi wi-owm-night-${day.weather[0].id}`} />
								) : (
									<i className={`wi wi-owm-${day.weather[0].id}`} />
								)}
								<p>
									<strong className="temp-text">{Math.round(day.main.temp)}&deg;</strong>
								</p>
							</div>
						);
					})}
    </div>
)
export default DisplayForecast