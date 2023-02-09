import styled from "styled-components";

export const CardWrapper = styled.div`
    display: grid;
    place-items: center;
    grid-gap: 1.5rem;
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;
    
    @media screen and (min-width: 600px) {
        grid-template-columns : repeat(2, 1fr);
    }
    @media screen and (min-width: 800px) {
        grid-template-columns : repeat(4, 1fr);
    }
`

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 1rem;
    border-radius: 25px;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);


    @media screen and (min-width: 600px) {
        height: 350px;
    }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 110%;
            background-size: cover;
            background-position: 0 0;
            transition: transform calc((700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1));
            pointer-events: none;
        }

        &:after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            pointer-events: none;
            background-color: rgba(0,0,0, 0.150);
            // backdrop-filter: blur(2px);
            // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
            transform: translateY(-50%);
            transition: transform calc((700ms * 2) cubic-bezier(0.19, 1, 0.22, 1));
        }

        &:nth-child(1):before {
            background-image: url(https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        }
        &:nth-child(2):before {
            background-image: url(https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        }
        &:nth-child(3):before {
            background-image: url(https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        }
        &:nth-child(4):before {
            background-image: url(https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        }

`

export const CardTextWrapper = styled.div`
        width: 100%;
`


export const CardTextTitle = styled.h1`
        font-size: 28px;
        font-weight: bold;
        line-height: 1.2;
`

export const CardTextBody = styled.div`
        font-size: 16px;
        font-size: 1.125rem;
        font-style: italic;
        line-height: 1.35;
`

export const CardContent = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
        transition: transform 700 cubic-bezier(0.19, 1, 0.22, 1);
        z-index: 1;

        & > * + * {
            margin-top: 1rem;
        }
`   
