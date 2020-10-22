import React ,{useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../../Utils/form'
import DisplayWeather from '../../Utils/displayWeather'
import './Forecast.css'


import { covertToFahrenheit } from '../../Utils/functions';

 const Forecast = ()=>{
   const KEY_API='ce06c3f81e1990453b38833c502026cb';
    
    const [inputText, setInputText] = useState('')
    const [data, setData]= useState({})
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
   
   const getWeather = (e)=>{
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${KEY_API}`)
        .then(response=> 
            setData({
                city: response.data.name,
                country: response.data.sys.country,
                temperature: covertToFahrenheit(response.data.main.temp),
                max: covertToFahrenheit(response.data.main.temp_max),
                min: covertToFahrenheit(response.data.main.temp_min),
                condition: response.data.weather[0].description,
                icon: response.data.weather[0].icon
            })
        )
    }
   return (
       <div>
        <Form setInputText={setInputText} getWeather={getWeather}/>
        <DisplayWeather 
        city= {data.city}
        country={data.country}
        temperature={data.temperature}
        max={data.max}
        min={data.min}
        condition={data.condition}
        icon={data.icon}

        />
        
    </div>
    )
}
 export default Forecast

