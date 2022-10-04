import styled from "styled-components";

export const InfoContainer = styled.div`
    // @media screen and (max-width: 768px) {
    //     padding: 100px 0;
    // }
    
`

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 280px);
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin-bottom: 15px;
    padding: 0 15px;
`

export const Heading = styled.h1`
    margin-top: 15px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 25px;
    font-size: 20px;
    color: #000;
    text-align: center;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 60px;
    padding-bottom: 40px;
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    padding: 0 0 10px 0;
`
export const Container = styled.div`
    display:flex;
    width: 100%;
    gap: 3rem;
    padding: 40px calc((100% - (300px * 3)) / 2);
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const GridContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    flex: 0 0 215px;
    margin: 1em 10px;
    justify-content: center;
    align-items: center;
`

export const GridImage = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;

    &:hover {
        transform: scale(1.1)
    }
`
export const GridText = styled.p`
    font-size: 15px;
    color: #000;
    display: flex;
    gap: 5rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`
