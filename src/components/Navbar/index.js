import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ( { toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">MED CHEF</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="recipes">Recipes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="health">Health Talks</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact-me">Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="blog">Blog</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
