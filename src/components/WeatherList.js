import { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext"
import "../App.css"

function WeatherList() {
  const { weather, setActiveWeather } = useContext(WeatherContext)

  return (
    <div className="weatherListContainer">
      <div className="weatherList">

        {
          weather.map(item => (
            <div className="weather" key={item.date} onClick={() => setActiveWeather({ date: item.date, humidity: item.day.avghumidity, avgTemp: item.day.avgtemp_c, rainRange: item.day.daily_chance_of_rain, hours: item.hour })}>
              <h3>{item.date}</h3>
              <img src={item.day.condition.icon} alt="" />
              <h4>{item.day.condition.text}</h4>
              <div>Max: {item.day.maxtemp_c} / Min: {item.day.mintemp_c}</div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default WeatherList;