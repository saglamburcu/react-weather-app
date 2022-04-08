import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext"
import "../App.css"

function WeatherList() {
  const { weather, changeWeather, changeDate } = useContext(WeatherContext)
  const [selectWeather, setSelectWeather] = useState(1)

  const onChange = (index, item) => {
    changeWeather({ date: item.date, humidity: item.day.avghumidity, avgTemp: item.day.avgtemp_c, rainRange: item.day.daily_chance_of_rain, hours: item.hour })
    setSelectWeather(index)
  }

  return (
    <div className="weatherListContainer">
      <div className="weatherList">
        {
          weather.map((item, index) => (
            <div
              key={item.date}
              className={`${index === selectWeather ? "weather selected" : "weather"}`}
              onClick={() => onChange(index, item)}>

              <h3>{changeDate(item.date)}</h3>
              <img src={item.day.condition.icon} alt="" />
              <h4>{item.day.condition.text}</h4>
              <h4>Max: {item.day.maxtemp_c} °C </h4>
              <h4>Min: {item.day.mintemp_c} °C</h4>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default WeatherList;