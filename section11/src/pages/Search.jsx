import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchSearchResults} from "../api.js";

export default function Search() {
  const [searchParams, _setSearchParams] = useSearchParams()
  const q = searchParams.get('q')

  const [countries, setCountries] = useState([])

  const setInitData = async () => {
    const data = await fetchSearchResults(q)
    setCountries(data)
  }

  useEffect(() => {
    setInitData()
  }, [q]);

  return <div><h1>Search {q}</h1></div>
}