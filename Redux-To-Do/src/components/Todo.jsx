import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todo = () => {
  const todos =  useSelector(state=>state.todos)
  const dispatch = useDispatch()
  return (
    <div>{
        todos.map((value)=>(
            <li key={value.id}>{value.text} <button onClick={()=>{
                dispatch(removeTodo(value.id))
            }}>X</button></li>

        ))}</div>
  )
}

export default Todo