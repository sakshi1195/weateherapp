import axios from 'axios';
import React, { useState } from 'react'

export default function WeatherA() {
    const[city, setcity] = useState()
    const[weather, setweather] = useState()
    const handleChaneCity = (event) => {
        setcity(event.target.value);
    }
    const featchWeather = async() =>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef5f40f6c9fa1fbb0045844d76b2e733`);

            console.log(response)
            setweather(response)

        }catch(error) {
            console.log("error while fetching the data", error)
        }

    }
    

    const handleclick = () => {
        featchWeather()

    }

  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleChaneCity}></input>
        <br>
        </br>
        <button onClick={handleclick} className="weather-button"> Get Weather </button>
        {weather && <>
        <div className = 'weather-info'> 
        <h2>{weather.data.name}</h2>
        <p>The temp is {weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
        </div></>
        }
       
    </div>
  )
}
