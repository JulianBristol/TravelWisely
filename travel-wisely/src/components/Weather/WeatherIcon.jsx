import React, { useState } from 'react'
import Cloud from '../../assets/Cloud.png';
import Fog from '../../assets/Fog.png';
import Moon from '../../assets/Moon.png';
import MostlyCloudy from '../../assets/Mostly Cloudy.png';
import MostlyCloudyN from '../../assets/Mostly Cloudy(N).png';
import PartlyCloudy from '../../assets/Partly Cloudy.png';
import PartlyCloudyN from '../../assets/Partly Cloudy(N).png';
import Rain from '../../assets/Rain.png';
import Sun from '../../assets/Sun.png';
import Thunderstorm from '../../assets/Thunderstorm.png';
import useStyles from "./styles";

const WeatherIcon = ({weatherType, dayType}) => {
    const classes = useStyles();
    const [weatherIcon, setWeatherIcon] = useState('');
    if (['113'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(dayType ? Moon : Sun);
    }else if (['116'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(dayType ? PartlyCloudyN : PartlyCloudy);
    }else if (['119'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(dayType ? MostlyCloudyN : MostlyCloudy);
    }else if (['122'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(Cloud);
    }else if (['143', '248', '260', ].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(Fog);
    }else if (['176', '263', '266', '293', '296', '299', '302', '305', '308', '358', '356', '359'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(Rain);
    }else if (['200', '386', '389'].includes(weatherType) && weatherIcon === '') {
        setWeatherIcon(Thunderstorm);
    }
  return (
    <>
    <img className={classes.weatherIcon} src={weatherIcon} alt='weather'/>
    </>
  )
}

export default WeatherIcon
