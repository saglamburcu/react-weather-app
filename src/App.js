import { WeatherProvider } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import WeatherList from "./components/WeatherList";
import CurrentWeather from "./components/CurrentWeather";
import PaginationButton from "./components/PaginationButton";
import "./App.css"

function App() {

  return (
    <WeatherProvider>
      <div className="bigContainer">

        <SearchBar />
        <div className="currentContainer">
          <CurrentWeather />
          <PaginationButton />
        </div>

        <WeatherList />

      </div>
    </WeatherProvider>
  )
}

export default App;