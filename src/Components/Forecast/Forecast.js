import React ,{useState, useEffect } from 'react'
import axios from 'axios'

 const Forecast = ()=>{
    const key = 'ce06c3f81e1990453b38833c502026cb';
    const [location, setLocation]=useState('')
    const [data, setData]=useState({})
    const [coord, setCoord]=useState({lat:'50', lon:'60'})

    useEffect(()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
              
              var loc = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
              }
              
                setCoord(loc)  
              
              const api =`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${key}`;
              axios.get(api)
              .then(response => {
                console.log(response)
                let weather ={
                  city: response.data.name,
                  country:response.data.sys.country,
                  temperature: this.covertToFahrenheit(response.data.main.temp),
                  max: this.covertToFahrenheit(response.data.main.temp_max),
                  min:this.covertToFahrenheit(response.data.main.temp_min),
                  condition: response.data.weather[0].description
                  }
                  setData(weather)
              })
                },[])
            }
        })
                return (
                <div>

                </div>
            )
        }
 export default Forecast

