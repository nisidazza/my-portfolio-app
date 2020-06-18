import React from "react";
import { Col, Row } from "reactstrap";
import "./Style/Skills.css";
import "./Style/CommonCSS.css";
import {Document, Page} from "react-pdf";


class Skills extends React.Component {
  render() {
    return (
      <Row className="skills-container">
        <Col sm="6">
          <div className="skills-list-container">
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
          </div>
        </Col>
        <Col sm="6">
          <Document file="../public/Nisida_Azzalini_CV.pdf">
            <Page>

            </Page>
          </Document>
        </Col>
      </Row>
    );
  }
}

export default Skills;
