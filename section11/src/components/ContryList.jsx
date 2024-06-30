import ContryItem from "./ContryItem.jsx";
import style from "./CountryList.module.css"

export default function ContryList({countries}) {
  return (
    <div className={style.container}>
      {countries.map((country) => (<ContryItem key={country.code} {...country}/>))}
    </div>
  )
}

ContryList.defaultProps = {
  countries: []
}