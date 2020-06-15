import React from "react";
import { Col } from "reactstrap";
import "./Home.css";
import nl2br from "react-newline-to-break";

class Home extends React.Component {
  render() {
    let introText = "Hi, \nI'm Nisida,\nWeb Developer.";
    return (
      <div className="home-container">
        <Col>
          <div>{nl2br(introText)}</div>
        </Col>
      </div>
    );
  }
}

export default Home;
