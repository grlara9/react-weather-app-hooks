import React ,{useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../../Utils/form'
import Toggler from '../../Utils/degreeToddler'
import DisplayWeather from '../../Utils/displayWeather'
import ForecastList from '../../Utils/ForecastList'
import UseFetch from '../../Utils/useFetch'
import '../Forecast.css'

import { convertToFahrenheit } from '../../Utils/functions';
import { SettingsApplicationsRounded } from '@material-ui/icons'

const Forecast = ()=>{
   //const KEY_API='ce06c3f81e1990453b38833c502026cb';
   const KEY_API="fd65dfc39c19c48cf92e9b8454d0686d";
 

    const [inputText, setInputText] = useState('')
    const [data, setData]= useState([])
    const [degreeType, setDegreeType]=useState('fahrenheit')
   
    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
              console.log("this is the position" + position.coords.latitude + position.coords.longitude)
              
                //const api =`https://api.openweathermap.org/data/2.5/weather?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY_API}`;
                const api =`http://api.openweathermap.org/data/2.5/forecast?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY_API}`
                axios.get(api)
                .then(response =>{ 
                   console.log(response)
                   setData({
                       city: response.data.city.name,
                       country:response.data.city.country,
                       temperature:  response.data.list[0].main.temp,
                       max: response.data.list[0].main.temp_max,
                       min: response.data.list[0].main.temp_min,
                       condition: response.data.list[0].description,
                       icon: response.data.list[0].weather[0].icon,
                       list: response.data.list
                    
                    })
                })
            
            })
        }
    }, []);

    const getForecast = (e) =>{
        e.preventDefault();

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputText}&appid=${KEY_API}`)
        .then(promise => {
            console.log("work please", promise)
            setData(promise)
            
        })
        .then(err => console.log(err))
    } 
    
    
return (
    <div>
        <div className="main-weather">
        <Form setInputText={setInputText} />
        <Toggler setDegreeType={setDegreeType} degreeType={degreeType}/>
        <DisplayWeather 
            city= {data.city}
            country={data.country}
            temperature={data.temperature}
            max={data.max}
            min={data.min}
            condition={data.condition}
            icon={data.icon}
            degreeType={degreeType}
           
        />

</div>

    {data && <ForecastList  className="main-forecast"
        degreeType={degreeType}
        weathers={data.list}
        
    />}

        
       
    </div>
)}
 export default Forecast

