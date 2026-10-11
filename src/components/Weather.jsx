import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/sunny.png'
import cloud_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/windy.png'
import humidity_icon from '../assets/humidity.png'


const Weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type="text"placeholder='search'/>
            <img src={search_icon} alt=''/>
        </div>
        <img src={clear_icon} className='weather-icon'/>
        <p className='temperature'>20°C</p>
        <p className='location'>London</p>
        <div className="weather-data">
    <div className="col">
        <img src={humidity_icon} alt="" />
        <div>
            <p>91 %</p>
            <span>humidity</span>
        </div>
    </div>
    <div className="col">
        <img src={wind_icon} alt="" />
        <div>
            <p>36 km/h</p>
            <span>wind speed</span>
        </div>
    </div>
</div>
        
    </div>
  )
}

export default Weather
