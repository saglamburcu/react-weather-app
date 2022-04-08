import WeatherContext from "../context/WeatherContext";
import { useContext, useEffect, useState } from "react";
import "../App.css";

function CurrentWeather() {

  const { activeWeather, changeDate } = useContext(WeatherContext)


  return (
    <div className="currentList">
      <ul>
        <li>
          {changeDate(activeWeather.date)}
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