import axios from "axios";
import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([])
  const [activeWeather, setActiveWeather] = useState({ date: "2022-04-08", humidity: "25", avgTemp: "", rainRange: "", hours: [] })


  async function getData(city) {
    const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=641a1cf9fdd641f0b61214511222803&q=${city}&days=7&aqi=no&alerts=no`)
      .then(resp => setWeather(resp.data.forecast.forecastday))
  }

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const changeDate = (date) => {
    const d = new Date(date);
    let day = d.getDay();
    return weekdays[day];
  }

  // getData("izmir")

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

