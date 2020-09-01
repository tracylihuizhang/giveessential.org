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
import { LogoPic, MediaIcons } from "./styles";

import "../../fonts/Montserrat/Montserrat-Medium.ttf";

import LogoWhite from "../../assets/images/logo-white.png";
import fbImg from "../../assets/icons/facebook.png";
import instaImg from "../../assets/icons/instagram.png";
import twitterImg from "../../assets/icons/twitter.png";
import linkedinImg from "../../assets/icons/linkedin.png"


import "bootstrap/dist/css/bootstrap.min.css";

const textStyles = {
  fontFamily: "Montserrat, Open Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  paddingRight: "0.5em"
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
}

const pageLinks = {
  color: "#fff"
}

export function NavBar() {
  return (
    <div style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", backgroundColor: "#8CC9BA" }}>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <LogoPic src={LogoWhite} alt="Logo" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar style={textStyles}>
          <NavItem>
              <NavLink style={pageLinks} href="https://www.giveessential.org/faq">What We Do</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={pageLinks} href="https://www.giveessential.org/how-can-i-help">How Can I Help?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={pageLinks} href="https://www.giveessential.org/our-team">Our Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={pageLinks} href="https://www.giveessential.org/merch">Merch</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={pageLinks} href="https://www.giveessential.org/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem>
            <NavLink style={{padding: "0.5em"}} href="http://instagram.com/giveessential">
              <MediaIcons src={instaImg} alt="Instagram icon" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{padding: "0.5em"}} href="https://www.facebook.com/GiveEssential/">
              <MediaIcons src={fbImg} alt="Facebook icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{padding: "0.5em"}} href="https://twitter.com/GiveEssential">
              <MediaIcons src={twitterImg} alt="Twitter icon"/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{padding: "0.5em"}} href="https://www.linkedin.com/company/give-essential">
              <MediaIcons src={linkedinImg} alt="Linkedin icon"/>
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
