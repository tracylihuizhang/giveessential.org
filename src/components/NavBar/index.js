import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom';
import { LogoPic } from "./styles";
import {Picture} from "../../pages/ContactPage/styles";

import "../../fonts/Montserrat/Montserrat-Medium.ttf";

import LogoWhite from "../../assets/images/logo-white.png";
import fbImg from "../../assets/icons/facebook.png";
import instaImg from "../../assets/icons/instagram.png";
import twitterImg from "../../assets/icons/twitter.png";
import linkedinImg from "../../assets/icons/linkedin.png"


import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  // textTransform: "uppercase",
  fontFamily: "Montserrat, Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  // letterSpacing: "0.2rem"
};

const btnStyle = {
  backgroundColor: "#F3D04E",
  color: "#FFF", border: 0,
  textAlign: "center",
  borderRadius: ".4em",
  padding: "1.2em 2.004em",
  lineHeight: "1.2em",
  fontWeight: "420",
  letterSpacing: "0.02em",
  fontFamily: "Montserrat",
  // textTransform: "none",
  // fontStyle: "normal"
}

export function NavBar() {
  return (
    <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#8CC9BA" }}>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <LogoPic src={LogoWhite} alt="Logo" />
        </NavbarBrand>
        <Nav className="mr-auto" navbar style={textStyles}>
          <NavItem>
            <NavLink href="/about">How does this work?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about-us">Who we are</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact us</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink href="http://instagram.com/giveessential">
              <Picture src={instaImg} alt="Instagram icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.facebook.com/GiveEssential/">
              <Picture src={fbImg} alt="Facebook icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://twitter.com/GiveEssential">
              <Picture src={twitterImg} alt="Twitter icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/company/give-essential">
              <Picture src={linkedinImg} alt="Linkedin icon"/>
            </NavLink>
          </NavItem>
        </Nav>



        <Nav navbar style={{ float: "right", margin: 0 }}>
          <NavLink>
            <NavLink href="https://gofundme.com/f/give-essential">
              <button style={btnStyle}>Donate</button>
            </NavLink>
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
