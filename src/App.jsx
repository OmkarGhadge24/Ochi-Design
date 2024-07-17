import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1] text-[#212121]'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Feature/>
      <Cards />
    </div>
  )
}

export default App