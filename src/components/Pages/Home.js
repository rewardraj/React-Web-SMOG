import React, { useState } from 'react';
import About from './AboutSection/About';
import HeroSection from './HeroSection/HeroSection';
import InfoSection from './InfoSection/InfoSection';
import Navbar from '../Navbar';
import Recipe from './RecipeSection/Recipe';
import Sidebar from '../Sidebar/Sidebar';
import Testimonial from './Testimonial/Testimonial';



const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {setIsOpen(!isOpen)}

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection />
    <About />
    <Recipe />
    <Testimonial />
    </>
  )
}

export default Home
