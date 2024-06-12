import './TodoEditor.css'
import {useContext, useRef, useState} from "react";
import {TodoDispatchContext} from "../TodoContext.jsx";

export default function TodoEditor() {

  const {onCreate} = useContext(TodoDispatchContext)

  const [content, setContent] = useState("")
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onClick = () => {
    if (content === "") {
      inputRef.current.focus();
      return
    }
    onCreate(content)
    setContent("")
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  }

  return (
    <div className="TodoEditor">
      <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..."/>
      <button onClick={onClick}>추가</button>
    </div>
  )
}