import React from "react";
import { Col } from "reactstrap";
import "./Style/Home.css";
// import nl2br from "react-newline-to-break";

class Home extends React.Component {
  render() {
    // let introText = "Hi, \nI'm Nisida,\nWeb Developer.";
    return (
      <div className="home-container">
        <Col>
          <div className="animation-typewriter">
            <p>Hi,</p>
            <p>I'm Nisida,</p>
            <p>Web Developer.</p>
          </div>
        </Col>
      </div>
    );
  }
}

export default Home;
