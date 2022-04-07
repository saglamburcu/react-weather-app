import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherList from "./components/WeatherList";
import CurrentWeather from "./components/CurrentWeather";
import PaginationButton from "./components/PaginationButton";

function App() {

  return (
    <WeatherProvider>
      <SearchBar />
      <CurrentWeather />
      <PaginationButton />
      <WeatherList />
    </WeatherProvider>
  )
}

export default App;