import { Outlet } from 'react-router-dom'
import Body from './components/Body'
import Navbar from './components/Navbar'

const App = () => {
  return (<>
  
  <Navbar/>
  <Outlet/>
  
  </>

  )
}

export default App