import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import WeatherContext from "../context/WeatherContext"
import "../App.css"


function SearchBar() {
  const { getData } = useContext(WeatherContext)
  const [c, setC] = useState("izmir")

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      city: ""
    },
    onSubmit: (() => (
      getData(values.city),
      setC(values.city),
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
        <h1><b>{c.toUpperCase()} WEATHER FORECAST</b></h1>

      </form>
    </>
  )
}

export default SearchBar;