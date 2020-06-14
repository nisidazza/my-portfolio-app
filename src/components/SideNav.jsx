import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
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
            <NavLink>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </NavLink>
          </div>
          <NavLink>
            <Link to="/about">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faCogs} />
          </NavLink>
          <NavLink>
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
