import React, { useState } from 'react';
import About from '../AboutSection/About';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Navbar from '../Navbar';
import SecondHero from '../SecondHero/SecondHero';
import Sidebar from '../Sidebar/Sidebar';


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection />
    <About />
    <SecondHero />
    </>
  )
}

export default Home
