import React from "react"
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarMenu, SidebarLink,SidebarRoute, SidebarWrapper} from "./SidebarElements"


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onclick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="recipes" onClick={toggle}>Recipes</SidebarLink>
                <SidebarLink to="health" onClick={toggle}>Health Talks</SidebarLink>
                <SidebarLink to="contact-me" onClick={toggle}>Contact</SidebarLink>
                <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar
