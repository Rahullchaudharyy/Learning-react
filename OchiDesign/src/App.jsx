// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Componants/Navbar'
import LandingPage from './Componants/LandingPage'
import Marqee from './Componants/Marqee'
import About from './Componants/About'
import EyesDiv from './Componants/EyesDiv'
import Features from './Componants/Features'
import Cards from './Componants/Cards'
import Footer from './Componants/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='min-h-screen w-full text-white bg-zinc-900 overflow-x-hidden'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <EyesDiv/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App