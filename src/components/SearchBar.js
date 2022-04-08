import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import WeatherContext from "../context/WeatherContext"
import "../App.css"


function SearchBar() {
  const { getData } = useContext(WeatherContext)
  const [cityName, setCityName] = useState("izmir")

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      city: ""
    },
    onSubmit: (() => (
      getData(values.city),
      setCityName(values.city),
      values.city = ""
    ))
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="Please write a city name..."
        />
        <button className="button" type="submit">Search</button>
        <h1><b>{cityName.toUpperCase()} WEATHER FORECAST</b></h1>

      </form>
    </>
  )
}

export default SearchBar;