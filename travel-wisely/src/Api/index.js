import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://weatherapi-com.p.rapidapi.com/forecast.json",
      {
        params: {
          q: `${lat}, ${lng}` ,
          days: "3"
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

/* weatherAPI example data
{
  "location": {
    "name": "Sunnyside",
    "region": "New York",
    "country": "United States of America",
    "lat": 40.73,
    "lon": -73.94,
    "tz_id": "America/New_York",
    "localtime_epoch": 1666113539,
    "localtime": "2022-10-18 13:18"
  },
  "current": {
    "last_updated_epoch": 1666113300,
    "last_updated": "2022-10-18 13:15",
    "temp_c": 11.1,
    "temp_f": 52,
    "is_day": 1,
    "condition": {
      "text": "Overcast",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
      "code": 1009
    },
    "wind_mph": 2.2,
    "wind_kph": 3.6,
    "wind_degree": 10,
    "wind_dir": "N",
    "pressure_mb": 1006,
    "pressure_in": 29.7,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 44,
    "cloud": 100,
    "feelslike_c": 9,
    "feelslike_f": 48.2,
    "vis_km": 16,
    "vis_miles": 9,
    "uv": 4,
    "gust_mph": 12.3,
    "gust_kph": 19.8
  }
}
*/
