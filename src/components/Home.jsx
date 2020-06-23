import React from "react";
import { Col, Row } from "reactstrap";
import "./Style/Home.css";

class Home extends React.Component {
  render() {
    return (
      <Row className="home-container">
        <Col sm="6">
          <div className="animation-typewriter">
            <p className="home-p">
              <span className="home-color-change first-letter">H</span>
              <span className="home-color-change">i</span>
              <span className="home-color-change">,</span>
            </p>
            <p className="home-p">
              <span className="home-color-change">I</span>
              <span className="home-color-change">'</span>
              <span className="home-color-change">m</span>
              <span className="home-color-change">&nbsp;</span>
              <span className="home-color-change name-letter">N</span>
              <span className="home-color-change name-letter">i</span>
              <span className="home-color-change name-letter">s</span>
              <span className="home-color-change name-letter">i</span>
              <span className="home-color-change name-letter">d</span>
              <span className="home-color-change name-letter">a</span>
              <span className="home-color-change">,</span>
            </p>
            <p className="home-p">
              <span className="home-color-change">W</span>
              <span className="home-color-change">e</span>
              <span className="home-color-change">b</span>
              <span className="home-color-change">&nbsp;</span>
              <span className="home-color-change">D</span>
              <span className="home-color-change">e</span>
              <span className="home-color-change">v</span>
              <span className="home-color-change">e</span>
              <span className="home-color-change">l</span>
              <span className="home-color-change">o</span>
              <span className="home-color-change">p</span>
              <span className="home-color-change">e</span>
              <span className="home-color-change">r</span>
              <span className="home-color-change">.</span>
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
