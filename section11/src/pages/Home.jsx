import {useEffect, useState} from "react";
import {fetchCountries} from "../api.js";
import ContryList from "../components/ContryList.jsx";
import Searchbar from "../components/Searchbar.jsx";
import style from "./Home.module.css"

export default function Home() {
  const [countries, setCountries] = useState([])

  const setInitData = async () => {
    const data = await fetchCountries()
    setCountries(data)
  }

  useEffect(() => {
    setInitData()
  }, []);

  return (
    <div className={style.container}>
      <Searchbar/>
      <ContryList countries={countries}/>
    </div>
  )
}