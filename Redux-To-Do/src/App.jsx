
import Todo from "./components/Todo"
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
    <h1 className="text-center text-5xl p-9 font-bold">It's Redux tutorial</h1>
     <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
