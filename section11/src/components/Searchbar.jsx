import style from "./Searchbar.module.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
export default function Searchbar({q}) {
  const [search, setSearch] = useState("")
  const nav = useNavigate()

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const onClickSearch = () => {
    if(search !=="") {
      nav(`/search?q=${search}`)
    }
  }

  const onKeyDown = (e) => {
    if(e.key === "Enter") {
      onClickSearch()
    }
  }

  useEffect(() => {
    setSearch(q)
  }, [q]);

  return (
    <div className={style.container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요" />
      <button onClick={onClickSearch}>검색</button>
    </div>
  )
}