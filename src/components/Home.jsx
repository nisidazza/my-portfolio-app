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
            <p className="home-p">
              <span className="color-change first-letter">H</span>
              <span className="color-change">i</span>
              <span className="color-change">,</span>
            </p>
            <p className="home-p">
              <span className="color-change">I</span>
              <span className="color-change">'</span>
              <span className="color-change">m</span>
              <span className="color-change">&nbsp;</span>
              <span className="color-change name-letter">N</span>
              <span className="color-change name-letter">i</span>
              <span className="color-change name-letter">s</span>
              <span className="color-change name-letter">i</span>
              <span className="color-change name-letter">d</span>
              <span className="color-change name-letter">a</span>
              <span className="color-change">,</span>
            </p>
            <p className="home-p">
              <span className="color-change">W</span>
              <span className="color-change">e</span>
              <span className="color-change">b</span>
              <span className="color-change">&nbsp;</span>
              <span className="color-change">D</span>
              <span className="color-change">e</span>
              <span className="color-change">v</span>
              <span className="color-change">e</span>
              <span className="color-change">l</span>
              <span className="color-change">o</span>
              <span className="color-change">p</span>
              <span className="color-change">e</span>
              <span className="color-change">r</span>
              <span className="color-change">.</span>
            </p>
          </div>
        </Col>
        <Col sm="6">
          <div></div>
        </Col>
      </Row>
    );
  }
}

export default Home;
