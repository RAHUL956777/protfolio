import React from "react";
import { ReactNavbar } from "overlay-navbar";

const Header = () => {
  return (
    <ReactNavbar
        navColor1="white"
        navColor2="hsl(219,48%,8%)"
        burgerColor="hsl(250,100%,75%)"
        burgerColorHover="hsl(250,100%,75%)"
        // logo={logo}
        logoWidth="250px"
        logoHoverColor="hsl(250,100%,75%)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url='/'
        link2Url='/about'
        link3Url="/projects"
        link4Url="/contact"
        linkColorHover="white"
        link1Color="hsl(250,100%,75%)"
        link1Size="1.5rem"
        link1Padding="3vmax"
        />
    );
};

export default Header;
