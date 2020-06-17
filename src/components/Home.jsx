import React from "react";
import { Col, Row } from "reactstrap";
import "./Style/Home.css";
// import nl2br from "react-newline-to-break";

class Home extends React.Component {
  render() {
    // let introText = "Hi, \nI'm Nisida,\nWeb Developer.";
    return (
      <Row className="home-container">
        <Col sm="6">
          <div className="animation-typewriter">
            <p>Hi,</p>
            <p>I'm Nisida,</p>
            <p>Web Developer.</p>
          </div>
        </Col>
        <Col sm="6">
          <div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
