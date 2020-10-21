import React ,{useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../../Utils/form'
import './Forecast.css'


import { covertToFahrenheit } from '../../Utils/functions';

 const Forecast = ()=>{
   const KEY_API='ce06c3f81e1990453b38833c502026cb';
    const [location, setLocation]=useState('')
    const [inputText, setInputText] = useState('')
    const[city, setCity]=useState('')
    const [icon, setIcon]=useState('')
    const [country, setCountry] = useState('')
    const [temp, setTemp]=useState('')
    const [max, setMax]=useState('')
    const [min, setMin]=useState('')
    const [condition, setCondition]=useState('')

    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
              console.log("this is the position" + position.coords.latitude + position.coords.longitude)
              
                const api =`https://api.openweathermap.org/data/2.5/weather?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY_API}`;
                axios.get(api)
                .then(response => {
                console.log(response)
                
                setCity(response.data.name)
                setCountry(response.data.sys.country)
                setTemp(  covertToFahrenheit(response.data.main.temp))
                setMax(  covertToFahrenheit(response.data.main.temp_max))
                setMin( covertToFahrenheit(response.data.main.temp_min))
                setCondition(response.data.weather[0].description)
                setIcon(response.data.weather[0].icon)
                  
                })
                .then(err => console.log(err))
            })
        }
    },[])
   
  
   return (
       <div>
        <Form setInputText={setInputText}/>
        <div className="name">
            {city},{country}
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
    </div>
    )
}
 export default Forecast

