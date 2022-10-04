import styled from "styled-components";
import  { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: #50c4cf;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 40px')};
    color:#fffffe;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: #000;
    }
`