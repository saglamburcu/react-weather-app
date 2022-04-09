import WeatherContext from "../context/WeatherContext";
import { useContext, useEffect, useState } from "react";
import "../App.css";

function CurrentWeather() {

  const { activeWeather, changeDate } = useContext(WeatherContext)

  return (
    <div className="currentList">
      <ul>
        <li>
          <h3><b>{changeDate(activeWeather.date)}</b></h3>
        </li>
        <li>
          <h4><b>Humidity: {activeWeather.humidity} % </b></h4>
        </li>
        <li>
          <h4><b>Average Temperature: {activeWeather.avgTemp} °C</b></h4>
        </li>
        <li>
          <h4><b>Precipitation Rate: {activeWeather.rainRange} %</b></h4>
        </li>
      </ul>
    </div>
  )
}

export default CurrentWeather;