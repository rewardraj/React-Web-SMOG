import React, { useState } from 'react'
import styled from 'styled-components';
import { TestimonialContainer, TestimonialWrapper, Image } from './TestimonialElements';

const Testimonial = () => {

  const Testimony = {
    0: {
      client: "Jeffery, Emmaus School",
      quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    1: {
      client: "Adeh, Emmaus School",
      quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    2: {
      client: "Matthew Dimeji, Emmaus School",
      quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    3: {
      client: "Samuel Etuk, Emmaus School",
      quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    }
  } 

  /* States */ 
  const [current, setCurrent] = useState(Testimony[0]);
  const [active, setActive] = useState(0);

  /* Handlers */ 
  const handleSetClick = (event) => {
    setCurrent(Testimony[event.target.getAttribute("data-testimony")])
    setActive(event.target.getAttribute("data-testimony"));
  } 
  
  /* Styled component for span icon */
  const Span = styled.div`
    display: flex;

    span {
        height: 20px;
        width: 20px;
        margin: 0 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
    }

    span::before {
        content: "";
        height: 6px;
        width: 6px;
        background-color: #d4d4d4;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }

    span[data-testimony="${active}"]::before {
      background-color: #45454d;
    }
  }
  `  
  return (
    <TestimonialContainer>
      <h3>What Our Readers Say</h3>
    <TestimonialWrapper>
      <Image src="https://images.pexels.com/photos/2387335/pexels-photo-2387335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <p>{current.quote}</p>
      <p>{current.client}</p>
      <Span>
        {Object.keys(Testimony).map(index => (
          <span
          onClick={event =>handleSetClick(event)}
          data-testimony={index}
          key={index}
          />
        ))}
      </Span>
    </TestimonialWrapper>
    </TestimonialContainer>
  )
}

export default Testimonial

