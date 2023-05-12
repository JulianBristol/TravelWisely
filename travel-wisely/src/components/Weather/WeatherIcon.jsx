import React, { useState } from 'react'
import Cloud from '../../assets/Cloud.png';
import Fog from '../../assets/Fog.png';
import Lightning from '../../assets/Lightning.png';
import Moon from '../../assets/Moon.png';
import MostlyCloudy from '../../assets/Mostly Cloudy.png';
import MostlyCloudyN from '../../assets/Mostly Cloudy(N).png';
import PartlyCloudy from '../../assets/Partly Cloudy.png';
import PartlyCloudyN from '../../assets/Partly Cloudy(N).png';
import Rain from '../../assets/Rain.png';
import Sun from '../../assets/Sun.png';
import Thunderstorm from '../../assets/Thunderstorm.png';

const WeatherIcon = ({weatherType, dayType}) => {
    const [weatherIcon, setWeatherIcon] = useState('');
    if (['113'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(dayType ? Moon : Sun);
    }
  return (
    <>
    <img src={weatherIcon} alt='weather' style={{ height: '200px', background: 'black' }}/>
    </>
  )
}

export default WeatherIcon
