import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherList from "./components/WeatherList";
import CurrentWeather from "./components/CurrentWeather";

function App() {

  return (
    <WeatherProvider>
      <SearchBar />
      <CurrentWeather />
      <WeatherList />
    </WeatherProvider>
  )
}

export default App;