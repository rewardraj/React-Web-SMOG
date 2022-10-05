import styled from "styled-components";
import  { Link } from "react-scroll";


export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #181818;
    gap: 2em;
    justify-content: space-around;
    padding: 80px calc((100% - (450px * 3)) / 2);


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  
    }

    

`

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    // white-space: wrap;
    overflow: hidden;
    max-width: 65%;
    text-align: left;
    line-height: 1.5em;

    @media and screen and (max-width: 768px) {
        align-items: center;
        display: flex;
        gap: 20px;
    }

    @media screen and (max-width: 480px){
        align-items: center;
        display: flex;
        gap: 10px;
    }

   

`

export const AboutH2 = styled.h2`
    font-size: 24px;
    background: #01bf71;
    color: #ffff;
    max-width: 25%;
    padding: 0.3rem;
    text-align: center;
    cursor: pointer;
    justify-content: center;   
    
    @media screen and (max-width: 992px) {
        font-size: 20px;
        max-width: 25%;
        padding: 0.3rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
        max-width: 25%;
        align-self: center;
        justify-content: center;

    }

    @media screen and (max-width: 480px){
        font-size: 20px;
        max-width: 20%;
    }

    &:hover {
            transition: all 0.3s ease-in-out;
            background: #fff;
            color: #010606;
        }
`

export const AboutH3 = styled.h3`
    font-size: 28px;
    text-align: left;
    color: #fffffe;
    padding: 5px;

    @media screen and (max-width: 992px) {
        font-size: 25px;
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const AboutP = styled.p`

    color : #ddd6d6;

    @media screen and (max-width: 992px) {
        font-size: 16px;
        
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 13px;
    }
`

export const Image = styled.img`
    width: 500px;
    height: 400px;
    border-radius: 25px;

    @media screen and (max-width: 768px){
        // flex-grow: 1;
        // flex-direction: column;
        align-self: center;
        width: 400px;
        height: 300px;
    }

    @media screen and (max-width: 480px){
        flex-grow: 1;
    }
`

export const Button = styled(Link)`
    border-radius: 50px;
    background: #50c4cf;
    white-space: nowrap;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    text-align: center;
    height: 40px;
    width: 145px;
    color: #fff;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }

    @media screen and (max-width: 768px){
        align-self: center;
        justify-content: center;
    }

`