import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTodo,removeTodo} from '../features/todo/todoSlice';

const Todo = ()=>{

    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()


    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(todoText))
        setTodoText("")
    }


    return (
        <div className="max-w-md mx-auto mt-8 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Add a Todo</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your task..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Add Todo
            </button>
        </form>
    </div>
    )
}

export default Todo;