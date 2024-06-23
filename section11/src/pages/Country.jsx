import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchCountry} from "../api.js";

export default function Country() {
  const params = useParams()
  const [country, setCountry] = useState()

  const setInitData = async () => {
    const data = await fetchCountry(params.code)
    setCountry(data)
  }

  useEffect(() => {
    setInitData()
  }, [params.code]);

  return <div><h1>Country : {params.code}</h1></div>
}