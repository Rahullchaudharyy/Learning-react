import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import AppLayout from './AppLayout';
import DishPageFull from './components/DIshPage';


const Myrouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <DishPageFull />
      },
    ]
  },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={Myrouter}>
    <App />

  </RouterProvider>
);


