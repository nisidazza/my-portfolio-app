import React from "react";
import { Col, Row } from "reactstrap";
import "./Style/About.css";
import "./Style/CommonCSS.css";
import SpanEachCharacter from "./SpanEachCharacter.jsx";

class About extends React.Component {
  render() {
    return (
      <Row className="about-container">
        <Col>
          <div className="about-me-container">
            <h1 className="title-animation">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>m</span>
              <span>e</span>
            </h1>
            <SpanEachCharacter charsClassName="about-color-change">
              After spending 8 years working in accounting and clerical
              professions, I decided to change my career path and shift into the
              tech industry. I graduated at Enspiral Dev Academy in December
              2019 and I am now looking forward to transfer the skills I learned
              in my next developer role.
            </SpanEachCharacter>
            <SpanEachCharacter charsClassName="about-color-change">
              Well-organized, flexible and creative person, with a keen eye for
              detail. I work well on my own but I also enjoy collaborating with
              other people to solve problems, sharing ideas and find solutions.
            </SpanEachCharacter>
            <SpanEachCharacter charsClassName="about-color-change">
              Corgi lover, movie buff, fan of Star Trek and murder-mystery
              tv-series. I like painting, cooking and I enjoy long walks.
            </SpanEachCharacter>
          </div>
        </Col>
        <Col>
          <div className="profile-img-container">
            <img className="personal-img" src="/images/IMG_6921_cropped_transparent.png" alt="Profile" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default About;
