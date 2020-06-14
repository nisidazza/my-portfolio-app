import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

class SideNav extends React.Component {
  render() {
    return (
      <Nav vertical className="nav-container">
        <div className="logo-container display-flex">
          <NavItem>Logo</NavItem>
        </div>
        <div className="info-container display-flex">
          <div>
            <NavLink  href="/">
              <FontAwesomeIcon
                icon={faHome}
              />
            </NavLink>
          </div>
          <NavLink href="#">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faCogs} />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faEye} />
          </NavLink>
        </div>
        <div className="social-container display-flex">
          <NavLink href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
          <NavLink href="#">
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>
        </div>
      </Nav>
    );
  }
}

export default SideNav;
