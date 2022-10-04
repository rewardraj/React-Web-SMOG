import React from 'react'
import Cards from '../Cards/Cards'
import { 
    SecondHeroContainer,
    Column, 
    TextWrapper, 
    Subtitle, 
    Heading
} from './SecondHeroElements'

const SecondHero = () => {
  return (
    <>
      <SecondHeroContainer>
        <Column>
            <TextWrapper>
            <Heading>My Favorite Recipes</Heading>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien turpis. Donec rhoncus lacus nec ex molestie, at faucibus lectus aliquet. Vestibulum quis nibh elit. Nam non pellentesque tortor.</Subtitle>
            </TextWrapper>
        </Column>
        <Cards />
      </SecondHeroContainer>
    </>
  )
}

export default SecondHero
