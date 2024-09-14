import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'


const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[

      {

        path:'/about',
        element:<About/>
    
    
      },
      {
    
        path:'/contact',
        element:<Contact/>
    
    
      }

    ]

  },
  
])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={AppRouter}>
     <App />

   </RouterProvider>
  
)
