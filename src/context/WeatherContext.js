import axios from "axios";
import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([])
  const [activeWeather, setActiveWeather] = useState({ date: "", humidity: "", avgTemp: "", rainRange: "", hours: [] })


  async function getData(city) {
    try {
      const result = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=641a1cf9fdd641f0b61214511222803&q=${city}&days=7&aqi=no&alerts=no`);

      setWeather(result.data.forecast.forecastday);

      const todayWeather = {
        date: result.data.forecast.forecastday[0].date,
        humidity: result.data.forecast.forecastday[0].day.avghumidity,
        avgTemp: result.data.forecast.forecastday[0].day.avgtemp_c,
        rainRange: result.data.forecast.forecastday[0].day.daily_chance_of_rain,
        hours: result.data.forecast.forecastday[0].hour
      }

      setActiveWeather(todayWeather);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData("izmir")
  }, [])

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const changeDate = (date) => {
    const d = new Date(date);
    let day = d.getDay();
    return weekdays[day];
  }

  const changeWeather = (item) => {
    setActiveWeather(item)
  };

  const values = {
    weather,
    getData,
    changeWeather,
    activeWeather,
    changeDate
  }

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext;

