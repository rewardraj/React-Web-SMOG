import React from 'react'
import {
InfoContainer,
Column,
TextWrapper,

Heading,
Container,
GridImage,
GridContent,
GridText
} from './InfoSectionElements'

import Image1 from '../../../images/medicine.svg'
import Image2 from '../../../images/health-talks.svg'
import Image3 from '../../../images/diet.svg'
import Image4 from '../../../images/lifestyle.svg'
// import Image5 from '../../../images/laboratory.svg'


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
            <Heading>{homeObjectOne.headLine}</Heading>
            </TextWrapper>
        </Column>
      
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
        <GridImage src={Image4} type='jpg'></GridImage>
        <GridText>Lifestyle</GridText>
        </GridContent>
        {/* <GridContent>
        <GridImage src={Image5} type='jpg'></GridImage>
        <GridText>Lab Analysis</GridText>
        </GridContent> */}
        
      </Container>
      </InfoContainer>
    </>
  )
}

export default InfoSection
