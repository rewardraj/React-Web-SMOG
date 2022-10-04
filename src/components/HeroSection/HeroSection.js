import React, { useState } from 'react'
import  { HeroContainer, HeroBg } from './HeroElements'
import image from '../../images/me/Main.jpg'
import { Button } from '../Button/ButtonElement'
import { HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Image } from './HeroElements'


const HeroSection = () => {

  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);

  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <Image src={image} type='jpg' />
      </HeroBg>
      <HeroContent>
        <HeroH1>YOUR HEALTH CARE IS MY PURPOSE</HeroH1>
        <HeroP>explore ways to improve your health</HeroP>
        <HeroBtnWrapper>
          <Button to="signup" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}  
          </Button>         
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
