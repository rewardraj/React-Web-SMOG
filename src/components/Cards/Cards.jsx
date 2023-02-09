import React from 'react'
import { Button } from '../Button/ButtonElement';
import {
  CardWrapper,
  CardContainer,
  CardContent,
  CardTextTitle,
  CardTextBody,
} from "./CardsElements";


const Cards = () => {
  return (

      <CardWrapper>
        <CardContainer>
        <CardContent>
          <CardTextTitle>Breakfast</CardTextTitle>
          <CardTextBody>first meal</CardTextBody>
          <Button>See more</Button>
       </CardContent>
       </CardContainer>

       <CardContainer>
        <CardContent>
          <CardTextTitle>Lunch</CardTextTitle>
          <CardTextBody>second meal</CardTextBody>
          <Button>See more</Button>
       </CardContent>
       </CardContainer>

       <CardContainer>
        <CardContent>
          <CardTextTitle>Dinner</CardTextTitle>
          <CardTextBody>last meal</CardTextBody>
          <Button>See more</Button>
       </CardContent>
       </CardContainer>

       <CardContainer>
        <CardContent>
          <CardTextTitle>Dessert</CardTextTitle>
          <CardTextBody>appetizer or drinks</CardTextBody>
          <Button>See more</Button>
       </CardContent>
       </CardContainer>
    
      </CardWrapper>
  );
};


export default Cards