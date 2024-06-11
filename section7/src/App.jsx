import './App.css'
import Header from "./components/Header.jsx";
import TodoEditor from "./components/TodoEditor.jsx";
import TodoList from "./components/TodoList.jsx";
import {useReducer, useRef, useState} from "react";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "단백질음료 마시기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: true,
    content: "눕기",
    createdDate: new Date().getTime()
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data]
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.data
          ? {...it, isDone: !it.isDone}
          : it
      )
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data)
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone: false,
    //   content,
    //   createdDate: new Date().getTime()
    // }
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime()
      }
    })
    // setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => {
    // setTodos(
    //   todos.map((todo) => todo.id === targetId
    //     ? {...todo, isDone: !todo.isDone}
    //     : todo)
    // )
    dispatch({
      type: "UPDATE",
      data: targetId
    })
  }

  const onDelete = (targetId) => {
    // setTodos(
    //   todos.filter((todo) => todo.id !== targetId)
    // )
    dispatch({
      type: "DELETE",
      data:targetId
    })
  }

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
