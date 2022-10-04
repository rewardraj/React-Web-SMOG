import React, { useState } from 'react'
import image from '../../images/me/IMG_8099.jpg'
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements'
import {
Button,
AboutContainer,
AboutContent,
AboutH2,
AboutH3,
AboutP,
Image
} from './AboutElements'


const About = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <>
      <AboutContainer>
        <Image src={image} type='jpg' />
        <AboutContent>
        <AboutH2>About Me</AboutH2>
        <AboutH3>DO SOME AWESOME STUFF WITH ME</AboutH3>
        <AboutP>Sunmbola Matthew Oladimeji is a young scientist with experience as a Laboratory scientist and clinical and molecular cytogeneticist at Kamashki Memorial hospital MMM, India. His perpetual research to stay informed in his field keeps him atop his game.

Matthew is enthusiastic about researching and giving out health tips to help the average man achieve healthy living.</AboutP>
        <Button to="signup" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          >
            Read More {hover ? <ArrowForward /> : <ArrowRight />}  
          </Button>
        </AboutContent>
        
      </AboutContainer>
      
    </>
  )
}

export default About
