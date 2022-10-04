import styled from 'styled-components'

export const SlideWrapper = styled.div `
  position: relative;
  height: 100%;
  width: 100%;
`

export const ImageBox = styled.div`
    position: relative;
    height: 85%;
    width: 100%;

    img {
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
    }
`
export const NavButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 45%;
    padding: 5px;
    border-radius: 3px;
    border: none;
    background: rgba(255, 255, 255, 0.7);
`