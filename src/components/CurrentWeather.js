import WeatherContext from "../context/WeatherContext";
import { useContext, useState } from "react";
import "../App.css";

function CurrentWeather() {

  const { activeWeather } = useContext(WeatherContext)


  return (
    <div className="currentContainer">
      <ul>
        <li>
          {activeWeather.date}
        </li>
        <li>
          Humidity: {activeWeather.humidity} %
        </li>
        <li>
          Average Temperature: {activeWeather.avgTemp} °C
        </li>
        <li>
          Precipitation Rate: {activeWeather.rainRange} %
        </li>

      </ul>

    </div>
  )
}

export default CurrentWeather;