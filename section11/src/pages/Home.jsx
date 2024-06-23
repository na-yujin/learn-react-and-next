import {useEffect, useState} from "react";
import {fetchCountries} from "../api.js";

export default function Home() {
  const [_countrise, setCountries] = useState([])

  const setInitData = async () => {
    const data = await fetchCountries()
    setCountries(data)
  }

  useEffect(() => {
    setInitData()
  }, []);

  return <div><h1>Home</h1></div>
}