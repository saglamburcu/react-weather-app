import { useContext } from "react";
import { useFormik } from "formik";
import WeatherContext from "../context/WeatherContext"
import "../App.css"


function SearchBar() {
  const { getData } = useContext(WeatherContext)

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      city: ""
    },
    onSubmit: (() => getData(values.city))
  })

  return (
    <form onSubmit={handleSubmit}>
      <input name="city" value={values.city} onChange={handleChange} placeholder="Please write a city name." />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;