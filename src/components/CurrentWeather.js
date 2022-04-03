import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";

function CurrentWeather() {

  const { activeWeather } = useContext(WeatherContext)

  return (
    <div>
      {activeWeather.date} <br />
      {activeWeather.humidity} <br />
      {activeWeather.avgTemp} <br />
      {activeWeather.rainRange} <br />
    </div>
  )
}

export default CurrentWeather;