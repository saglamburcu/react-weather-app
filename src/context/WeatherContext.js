import axios from "axios";
import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([])
  const [activeWeather, setActiveWeather] = useState({ date: "", humidity: "", avgTemp: "", rainRange: "", hours: "", icons: "" })

  async function getData(city) {
    const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=641a1cf9fdd641f0b61214511222803&q=${city}&days=7&aqi=no&alerts=no`)
      .then(resp => setWeather(resp.data.forecast.forecastday))

  }

  const values = {
    weather,
    getData,
    setActiveWeather,
    activeWeather
  }

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext;

