import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchCountry} from "../api.js";
import style from "./Contry.module.css"

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

  if (!country) {
    return <div>Loading...</div>
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>
          {country.officialName}
        </div>
      </div>
      <img src={country.flagImg} alt={`${country.commonName}의 국기 이미지`} />
      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;<a href={country.googleMapURL} target="_blank">{country.googleMapURL}</a>
        </div>
      </div>
    </div>
  )
}