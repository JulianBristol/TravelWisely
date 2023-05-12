import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData, getWeatherData } from "./Api";
import Weather from "./components/Weather/Weather";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState({
    /* "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1572750327,
      "localtime": "2019-11-03 3:05"
    },
    "current": {
      "temp_c": 9,
      "temp_f": 48.2,
      "is_day": 0,
      "condition": {
        "text": "Clear",
        "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
        "code": 1000
      },
      "wind_mph": 6.9,
      "wind_kph": 11.2,
      "wind_degree": 220,
      "wind_dir": "SW",
      "pressure_mb": 979,
      "pressure_in": 29.4,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 81,
      "cloud": 0,
      "feelslike_c": 7.2,
      "feelslike_f": 45,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 0,
      "gust_mph": 16.3,
      "gust_kph": 26.3
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2019-11-03",
          "date_epoch": 1572739200,
          "day": {
            "maxtemp_c": 13.2,
            "maxtemp_f": 55.8,
            "mintemp_c": 9.2,
            "mintemp_f": 48.6,
            "avgtemp_c": 10.9,
            "avgtemp_f": 51.7,
            "maxwind_mph": 12.1,
            "maxwind_kph": 19.4,
            "totalprecip_mm": 1.1,
            "totalprecip_in": 0.04,
            "avgvis_km": 10,
            "avgvis_miles": 6,
            "avghumidity": 73,
            "condition": {
              "text": "Heavy rain at times",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/305.png",
              "code": 1192
            },
            "uv": 1
          },
          "astro": {
            "sunrise": "06:57 AM",
            "sunset": "04:30 PM",
            "moonrise": "01:27 PM",
            "moonset": "09:45 PM",
            "moon_phase": "Waxing Crescent",
            "moon_illumination": "39"
          },
          "hour": [
            {
              "time_epoch": 1572739200,
              "time": "2019-11-03 00:00",
              "temp_c": 10,
              "temp_f": 50,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 12.1,
              "wind_kph": 19.4,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 979,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 69,
              "cloud": 39,
              "feelslike_c": 7.4,
              "feelslike_f": 45.3,
              "windchill_c": 7.4,
              "windchill_f": 45.3,
              "heatindex_c": 10,
              "heatindex_f": 50,
              "dewpoint_c": 4.5,
              "dewpoint_f": 40.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572742800,
              "time": "2019-11-03 01:00",
              "temp_c": 9.9,
              "temp_f": 49.8,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 10.5,
              "wind_kph": 16.9,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 979,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 69,
              "cloud": 29,
              "feelslike_c": 7.6,
              "feelslike_f": 45.7,
              "windchill_c": 7.6,
              "windchill_f": 45.7,
              "heatindex_c": 9.9,
              "heatindex_f": 49.8,
              "dewpoint_c": 4.5,
              "dewpoint_f": 40.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572746400,
              "time": "2019-11-03 02:00",
              "temp_c": 9.8,
              "temp_f": 49.6,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 9.2,
              "wind_kph": 14.8,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 979,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 70,
              "cloud": 20,
              "feelslike_c": 7.7,
              "feelslike_f": 45.9,
              "windchill_c": 7.7,
              "windchill_f": 45.9,
              "heatindex_c": 9.8,
              "heatindex_f": 49.6,
              "dewpoint_c": 4.5,
              "dewpoint_f": 40.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572750000,
              "time": "2019-11-03 03:00",
              "temp_c": 9.7,
              "temp_f": 49.5,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 7.6,
              "wind_kph": 12.2,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 978,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 70,
              "cloud": 11,
              "feelslike_c": 7.9,
              "feelslike_f": 46.2,
              "windchill_c": 7.9,
              "windchill_f": 46.2,
              "heatindex_c": 9.7,
              "heatindex_f": 49.5,
              "dewpoint_c": 4.5,
              "dewpoint_f": 40.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572753600,
              "time": "2019-11-03 04:00",
              "temp_c": 9.5,
              "temp_f": 49.1,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 7.4,
              "wind_kph": 11.9,
              "wind_degree": 227,
              "wind_dir": "SW",
              "pressure_mb": 979,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 71,
              "cloud": 16,
              "feelslike_c": 7.8,
              "feelslike_f": 46,
              "windchill_c": 7.8,
              "windchill_f": 46,
              "heatindex_c": 9.5,
              "heatindex_f": 49.1,
              "dewpoint_c": 4.5,
              "dewpoint_f": 40.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572757200,
              "time": "2019-11-03 05:00",
              "temp_c": 9.4,
              "temp_f": 48.9,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 7.2,
              "wind_kph": 11.5,
              "wind_degree": 225,
              "wind_dir": "SW",
              "pressure_mb": 979,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 71,
              "cloud": 20,
              "feelslike_c": 7.6,
              "feelslike_f": 45.7,
              "windchill_c": 7.6,
              "windchill_f": 45.7,
              "heatindex_c": 9.4,
              "heatindex_f": 48.9,
              "dewpoint_c": 4.4,
              "dewpoint_f": 39.9,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572760800,
              "time": "2019-11-03 06:00",
              "temp_c": 9.2,
              "temp_f": 48.6,
              "is_day": 0,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                "code": 1003
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 223,
              "wind_dir": "SW",
              "pressure_mb": 980,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 72,
              "cloud": 25,
              "feelslike_c": 7.5,
              "feelslike_f": 45.5,
              "windchill_c": 7.5,
              "windchill_f": 45.5,
              "heatindex_c": 9.2,
              "heatindex_f": 48.6,
              "dewpoint_c": 4.4,
              "dewpoint_f": 39.9,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572764400,
              "time": "2019-11-03 07:00",
              "temp_c": 9.5,
              "temp_f": 49.1,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 222,
              "wind_dir": "SW",
              "pressure_mb": 980,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 72,
              "cloud": 28,
              "feelslike_c": 7.8,
              "feelslike_f": 46,
              "windchill_c": 7.8,
              "windchill_f": 46,
              "heatindex_c": 9.5,
              "heatindex_f": 49.1,
              "dewpoint_c": 4.6,
              "dewpoint_f": 40.3,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572768000,
              "time": "2019-11-03 08:00",
              "temp_c": 9.7,
              "temp_f": 49.5,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 222,
              "wind_dir": "SW",
              "pressure_mb": 981,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 71,
              "cloud": 30,
              "feelslike_c": 8.1,
              "feelslike_f": 46.6,
              "windchill_c": 8.1,
              "windchill_f": 46.6,
              "heatindex_c": 9.7,
              "heatindex_f": 49.5,
              "dewpoint_c": 4.8,
              "dewpoint_f": 40.6,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572771600,
              "time": "2019-11-03 09:00",
              "temp_c": 10,
              "temp_f": 50,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 6.9,
              "wind_kph": 11.2,
              "wind_degree": 222,
              "wind_dir": "SW",
              "pressure_mb": 981,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 71,
              "cloud": 33,
              "feelslike_c": 8.4,
              "feelslike_f": 47.1,
              "windchill_c": 8.4,
              "windchill_f": 47.1,
              "heatindex_c": 10,
              "heatindex_f": 50,
              "dewpoint_c": 5,
              "dewpoint_f": 41,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572775200,
              "time": "2019-11-03 10:00",
              "temp_c": 11,
              "temp_f": 51.8,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 7.2,
              "wind_kph": 11.5,
              "wind_degree": 222,
              "wind_dir": "SW",
              "pressure_mb": 982,
              "pressure_in": 29.4,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 70,
              "cloud": 43,
              "feelslike_c": 9.5,
              "feelslike_f": 49.1,
              "windchill_c": 9.5,
              "windchill_f": 49.1,
              "heatindex_c": 11,
              "heatindex_f": 51.8,
              "dewpoint_c": 5.6,
              "dewpoint_f": 42.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572778800,
              "time": "2019-11-03 11:00",
              "temp_c": 11.9,
              "temp_f": 53.4,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 7.6,
              "wind_kph": 12.2,
              "wind_degree": 223,
              "wind_dir": "SW",
              "pressure_mb": 982,
              "pressure_in": 29.5,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 68,
              "cloud": 53,
              "feelslike_c": 10.7,
              "feelslike_f": 51.3,
              "windchill_c": 10.7,
              "windchill_f": 51.3,
              "heatindex_c": 11.9,
              "heatindex_f": 53.4,
              "dewpoint_c": 6.1,
              "dewpoint_f": 43,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572782400,
              "time": "2019-11-03 12:00",
              "temp_c": 12.9,
              "temp_f": 55.2,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 7.8,
              "wind_kph": 12.6,
              "wind_degree": 223,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0,
              "precip_in": 0,
              "humidity": 66,
              "cloud": 62,
              "feelslike_c": 11.8,
              "feelslike_f": 53.2,
              "windchill_c": 11.8,
              "windchill_f": 53.2,
              "heatindex_c": 12.9,
              "heatindex_f": 55.2,
              "dewpoint_c": 6.7,
              "dewpoint_f": 44.1,
              "will_it_rain": 0,
              "chance_of_rain": "0",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572786000,
              "time": "2019-11-03 13:00",
              "temp_c": 13,
              "temp_f": 55.4,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              },
              "wind_mph": 7.2,
              "wind_kph": 11.5,
              "wind_degree": 228,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.1,
              "precip_in": 0,
              "humidity": 67,
              "cloud": 63,
              "feelslike_c": 12,
              "feelslike_f": 53.6,
              "windchill_c": 12,
              "windchill_f": 53.6,
              "heatindex_c": 13,
              "heatindex_f": 55.4,
              "dewpoint_c": 7.1,
              "dewpoint_f": 44.8,
              "will_it_rain": 0,
              "chance_of_rain": "23",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572789600,
              "time": "2019-11-03 14:00",
              "temp_c": 13.1,
              "temp_f": 55.6,
              "is_day": 1,
              "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
              },
              "wind_mph": 6.7,
              "wind_kph": 10.8,
              "wind_degree": 233,
              "wind_dir": "SW",
              "pressure_mb": 982,
              "pressure_in": 29.5,
              "precip_mm": 0.2,
              "precip_in": 0.01,
              "humidity": 69,
              "cloud": 64,
              "feelslike_c": 12.3,
              "feelslike_f": 54.1,
              "windchill_c": 12.3,
              "windchill_f": 54.1,
              "heatindex_c": 13.1,
              "heatindex_f": 55.6,
              "dewpoint_c": 7.5,
              "dewpoint_f": 45.5,
              "will_it_rain": 0,
              "chance_of_rain": "47",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572793200,
              "time": "2019-11-03 15:00",
              "temp_c": 13.2,
              "temp_f": 55.8,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              },
              "wind_mph": 6,
              "wind_kph": 9.7,
              "wind_degree": 238,
              "wind_dir": "WSW",
              "pressure_mb": 982,
              "pressure_in": 29.5,
              "precip_mm": 0.3,
              "precip_in": 0.01,
              "humidity": 70,
              "cloud": 65,
              "feelslike_c": 12.5,
              "feelslike_f": 54.5,
              "windchill_c": 12.5,
              "windchill_f": 54.5,
              "heatindex_c": 13.2,
              "heatindex_f": 55.8,
              "dewpoint_c": 7.9,
              "dewpoint_f": 46.2,
              "will_it_rain": 0,
              "chance_of_rain": "70",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572796800,
              "time": "2019-11-03 16:00",
              "temp_c": 12.7,
              "temp_f": 54.9,
              "is_day": 1,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
              },
              "wind_mph": 5.8,
              "wind_kph": 9.4,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.4,
              "precip_in": 0.02,
              "humidity": 75,
              "cloud": 65,
              "feelslike_c": 12,
              "feelslike_f": 53.6,
              "windchill_c": 12,
              "windchill_f": 53.6,
              "heatindex_c": 12.7,
              "heatindex_f": 54.9,
              "dewpoint_c": 8.2,
              "dewpoint_f": 46.8,
              "will_it_rain": 0,
              "chance_of_rain": "68",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572800400,
              "time": "2019-11-03 17:00",
              "temp_c": 12.2,
              "temp_f": 54,
              "is_day": 0,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
              },
              "wind_mph": 5.4,
              "wind_kph": 8.6,
              "wind_degree": 221,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.6,
              "precip_in": 0.02,
              "humidity": 79,
              "cloud": 65,
              "feelslike_c": 11.4,
              "feelslike_f": 52.5,
              "windchill_c": 11.4,
              "windchill_f": 52.5,
              "heatindex_c": 12.2,
              "heatindex_f": 54,
              "dewpoint_c": 8.6,
              "dewpoint_f": 47.5,
              "will_it_rain": 0,
              "chance_of_rain": "67",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572804000,
              "time": "2019-11-03 18:00",
              "temp_c": 11.7,
              "temp_f": 53.1,
              "is_day": 0,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
              },
              "wind_mph": 5.1,
              "wind_kph": 8.3,
              "wind_degree": 212,
              "wind_dir": "SSW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.7,
              "precip_in": 0.03,
              "humidity": 83,
              "cloud": 65,
              "feelslike_c": 10.9,
              "feelslike_f": 51.6,
              "windchill_c": 10.9,
              "windchill_f": 51.6,
              "heatindex_c": 11.7,
              "heatindex_f": 53.1,
              "dewpoint_c": 8.9,
              "dewpoint_f": 48,
              "will_it_rain": 0,
              "chance_of_rain": "65",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572807600,
              "time": "2019-11-03 19:00",
              "temp_c": 11.4,
              "temp_f": 52.5,
              "is_day": 0,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
                "code": 1063
              },
              "wind_mph": 5.4,
              "wind_kph": 8.6,
              "wind_degree": 217,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.5,
              "precip_in": 0.02,
              "humidity": 83,
              "cloud": 69,
              "feelslike_c": 10.4,
              "feelslike_f": 50.7,
              "windchill_c": 10.4,
              "windchill_f": 50.7,
              "heatindex_c": 11.4,
              "heatindex_f": 52.5,
              "dewpoint_c": 8.6,
              "dewpoint_f": 47.5,
              "will_it_rain": 0,
              "chance_of_rain": "70",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572811200,
              "time": "2019-11-03 20:00",
              "temp_c": 11,
              "temp_f": 51.8,
              "is_day": 0,
              "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
              },
              "wind_mph": 5.8,
              "wind_kph": 9.4,
              "wind_degree": 222,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.3,
              "precip_in": 0.01,
              "humidity": 84,
              "cloud": 72,
              "feelslike_c": 10,
              "feelslike_f": 50,
              "windchill_c": 10,
              "windchill_f": 50,
              "heatindex_c": 11,
              "heatindex_f": 51.8,
              "dewpoint_c": 8.4,
              "dewpoint_f": 47.1,
              "will_it_rain": 1,
              "chance_of_rain": "74",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572814800,
              "time": "2019-11-03 21:00",
              "temp_c": 10.7,
              "temp_f": 51.3,
              "is_day": 0,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
                "code": 1063
              },
              "wind_mph": 6,
              "wind_kph": 9.7,
              "wind_degree": 227,
              "wind_dir": "SW",
              "pressure_mb": 984,
              "pressure_in": 29.5,
              "precip_mm": 0.1,
              "precip_in": 0,
              "humidity": 84,
              "cloud": 76,
              "feelslike_c": 9.5,
              "feelslike_f": 49.1,
              "windchill_c": 9.5,
              "windchill_f": 49.1,
              "heatindex_c": 10.7,
              "heatindex_f": 51.3,
              "dewpoint_c": 8.1,
              "dewpoint_f": 46.6,
              "will_it_rain": 1,
              "chance_of_rain": "79",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 10,
              "vis_miles": 6
            },
            {
              "time_epoch": 1572818400,
              "time": "2019-11-03 22:00",
              "temp_c": 10.6,
              "temp_f": 51.1,
              "is_day": 0,
              "condition": {
                "text": "Patchy light drizzle",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/263.png",
                "code": 1150
              },
              "wind_mph": 7.2,
              "wind_kph": 11.5,
              "wind_degree": 229,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.3,
              "precip_in": 0.01,
              "humidity": 82,
              "cloud": 69,
              "feelslike_c": 9.2,
              "feelslike_f": 48.6,
              "windchill_c": 9.2,
              "windchill_f": 48.6,
              "heatindex_c": 10.6,
              "heatindex_f": 51.1,
              "dewpoint_c": 7.6,
              "dewpoint_f": 45.7,
              "will_it_rain": 1,
              "chance_of_rain": "79",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 8.3,
              "vis_miles": 5
            },
            {
              "time_epoch": 1572822000,
              "time": "2019-11-03 23:00",
              "temp_c": 10.6,
              "temp_f": 51.1,
              "is_day": 0,
              "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
                "code": 1063
              },
              "wind_mph": 8.3,
              "wind_kph": 13.3,
              "wind_degree": 231,
              "wind_dir": "SW",
              "pressure_mb": 983,
              "pressure_in": 29.5,
              "precip_mm": 0.5,
              "precip_in": 0.02,
              "humidity": 79,
              "cloud": 62,
              "feelslike_c": 8.8,
              "feelslike_f": 47.8,
              "windchill_c": 8.8,
              "windchill_f": 47.8,
              "heatindex_c": 10.6,
              "heatindex_f": 51.1,
              "dewpoint_c": 7.1,
              "dewpoint_f": 44.8,
              "will_it_rain": 1,
              "chance_of_rain": "78",
              "will_it_snow": 0,
              "chance_of_snow": "0",
              "vis_km": 6.7,
              "vis_miles": 4
            }
          ]
        }
      ]
    },
    "alert": {}
   */});
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
        data !== undefined ? setWeatherData(data) : console.log('Error: no weather data');
      }
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setFilteredPlaces([]);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%", marginTop: "50px" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
          {console.log(weatherData)}
          {console.log(weatherData === {})}
          {weatherData !== undefined && Object.keys(weatherData).length !== 0 ?
          <Weather weatherData={weatherData} />
          : <></>
        }
        </Grid>
      </Grid>
    </>
  );
};

export default App;
