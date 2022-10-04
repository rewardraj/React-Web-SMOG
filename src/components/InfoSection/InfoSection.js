import React from 'react'
import {
InfoContainer,
Column,
TextWrapper,
Subtitle,
Heading,
Container,
GridImage,
GridContent,
GridText
} from './InfoSectionElements'

import Image1 from '../../images/diseases.jpg'
import Image2 from '../../images/health-talks.jpg'
import Image3 from '../../images/lifestyle.jpg'


export const homeObjectOne = {
    headLine: "Your Health Matters!",
    description: "Category",
    first: "Health Talks",
    second: "Medicine",
    third: "Fitness",
    fourth: "Food",
    sub1: "More",
    sub2: "More",
    sub3: "Hello",
    sub4: "Hello",
    sub5: "Hello",
    sub6: "Hello"
}



const InfoSection = () => {
  
  return (
    <>
      <InfoContainer>
        <Column>
            <TextWrapper>
            <Subtitle>{homeObjectOne.description}</Subtitle>
            <Heading>{homeObjectOne.headLine}</Heading>
            </TextWrapper>
        </Column>
      </InfoContainer>
      <Container>
        <GridContent>
        <GridImage src={Image1} type='jpg'></GridImage>
        <GridText>Medicine</GridText>
        </GridContent>
        <GridContent>
        <GridImage src={Image2} type='jpg'></GridImage>
        <GridText>Health Talks</GridText>
        </GridContent>
        <GridContent>
        <GridImage src={Image3} type='jpg'></GridImage>
        <GridText>Diet</GridText>
        </GridContent>
        <GridContent>
        <GridImage src={Image1} type='jpg'></GridImage>
        <GridText>Hello</GridText>
        </GridContent>
        <GridContent>
        <GridImage src={Image1} type='jpg'></GridImage>
        <GridText>Hello</GridText>
        </GridContent>
        
      </Container>
    </>
  )
}

export default InfoSection
