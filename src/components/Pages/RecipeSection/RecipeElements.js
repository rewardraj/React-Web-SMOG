import styled from "styled-components";

export const SecondHeroContainer = styled.div`
    background-color: #e4e7e6;
    padding-bottom: 100px;
`

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;

`

export const Heading = styled.h1`
    margin-top: 15px;
    font-size: 28px;
    line-height: 2;
  

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`

export const Subtitle = styled.p`
    margin: 15px;
    font-size: 16px;
    text-align: center;
    align-self: center;
    justify-content: center;
`

export const TextWrapper = styled.div`
    text-align: center;
    padding: 60px 40px;
    align-self: center;
    width: 50%;
`
