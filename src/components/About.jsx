import React from "react";
import { Col } from "reactstrap";
import "./Style/About.css";
import "./Style/CommonCSS.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-me-container">
        <Col>
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
          <h6>
            After spending 8 years working in accounting and clerical
            professions, I decided to change my career path and shift into the
            tech industry. I graduated at Enspiral Dev Academy in December 2019
            and I am now looking forward to transfer the skills I learned in my
            next developer role.
          </h6>
          <h6>
            Well-organized, flexible and creative person, with a keen eye for
            detail. I work well on my own but I also enjoy collaborating with
            other people to solve problems, sharing ideas and find solutions.
          </h6>
          <h6>
            Corgi lover, movie buff, fan of Star Trek and murder-mystery
            tv-series. I like painting, cooking and I enjoy long walks.
          </h6>
        </Col>
      </div>
    );
  }
}

export default About;
