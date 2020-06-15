import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Style/SideNav.css";
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
            <NavLink tag={Link} to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
          </div>
          <NavLink tag={Link} to="/about">
              <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink tag={Link} to="/skills">
              <FontAwesomeIcon icon={faCogs} />
          </NavLink>
          <NavLink tag={Link} to="/projects">
              <FontAwesomeIcon icon={faEye} />
          </NavLink>
        </div>
        <div className="social-container display-flex">
          <NavLink rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/nisida-azzalini-26011987/?locale=en_US">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
          <NavLink rel="noopener noreferrer" target="_blank" href="https://github.com/nisidazza">
            <FontAwesomeIcon icon={faGithub} />
          </NavLink>
        </div>
      </Nav>
    );
  }
}

export default SideNav;
