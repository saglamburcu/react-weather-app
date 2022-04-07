import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import WeatherContext from "../context/WeatherContext";

function PaginationButton() {
  const { activeWeather } = useContext(WeatherContext)

  const [indexOfFirstIcon, setIndexOfFirstIcon] = useState(10)
  const [indexOfLastIcon, setIndexOfLastIcon] = useState(17)

  let icons = activeWeather.hours.slice(indexOfFirstIcon, indexOfLastIcon)

  const onPrevButton = () => {
    setIndexOfFirstIcon(indexOfFirstIcon === 0 ? indexOfFirstIcon : indexOfFirstIcon - 1)
    setIndexOfLastIcon(indexOfLastIcon === 7 ? indexOfLastIcon : indexOfLastIcon - 1)
  }

  const onNextButton = () => {
    setIndexOfLastIcon(indexOfLastIcon === 24 ? indexOfLastIcon : indexOfLastIcon + 1)
    setIndexOfFirstIcon(indexOfFirstIcon === 17 ? indexOfFirstIcon : indexOfFirstIcon + 1)
  }


  return (
    <div className="paginationContainer">

      <Pagination size='lg'>
        <Pagination.Prev onClick={onPrevButton} />
        <li className="iconBox">
          {icons.map((hour, index) => (
            <div key={index} >
              <img src={hour.condition.icon} alt="#" /> <br />
              <span>{hour.time.slice(11, 16)}</span>
            </div>
          ))}
        </li>
        <Pagination.Next onClick={onNextButton} />
      </Pagination>
    </div>


  )
}

export default PaginationButton;