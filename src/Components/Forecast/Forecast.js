import React ,{useState, useEffect } from 'react'
import axios from 'axios'

 const Forecast = ()=>{
    const key = 'ce06c3f81e1990453b38833c502026cb';
    const [location, setLocation]=useState('')
    const [data, setData]=useState({})
    const[city, setCity]=useState('')
    
    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
              console.log("this is the position" + position.coords.latitude + position.coords.longitude)
              
                const api =`https://api.openweathermap.org/data/2.5/weather?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`;
                axios.get(api)
                .then(response => {
                console.log(response)
                
                  setCity(response.data.name)
                  
                  
                 
                })
                .then(err => console.log(err))
            })
        }
    },[])
        
                return (
                <div>
                    {city}
                </div>
            )
        }
 export default Forecast

