import React from "react";
import { Col } from "reactstrap";
import "./Style/Skills.css";
import "./Style/CommonCSS.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-container">
        <Col>
          <h1 className="title-animation">
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
            </h1>
          <h5>Front End Development</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h5>Back End Development</h5>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQLite3 / PostgreSQL</li>
            <li>Knex.js</li>
            <li>REST API</li>
          </ul>
        </Col>
      </div>
    );
  }
}

export default Skills;
