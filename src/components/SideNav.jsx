import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import './SideNav.css'

class SideNav extends React.Component {
  render() {
    return (
      <Nav vertical className="nav-container">
        <div className="logo-container display-flex">
          <NavItem>Logo</NavItem>
        </div>
        <div className="info-container display-flex">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Skills</NavLink>
          <NavLink href="#">Project</NavLink>
        </div>
        <div className="social-container display-flex">
          <NavLink href="#">LinkedIn</NavLink>
          <NavLink href="#">GitHub</NavLink>
        </div>
      </Nav>
    );
  }
}

export default SideNav;
