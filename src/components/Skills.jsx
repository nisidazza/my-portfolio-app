import React from "react";
import { Col, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./Style/Skills.css";
import "./Style/CommonCSS.css";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      numPages: null,
      isLoaded: false,
      scale: 1.0
    };
  }

  onPdfSuccessfullyLoaded = (pdf) => {
    this.setState({
      numPages: pdf.numPages,
      isLoaded: true,
    });
  };

  previousPage = () => {
    if (this.state.pageNumber === 2) {
      this.setState({
        pageNumber: this.state.pageNumber - 1,
      });
    }
  };

  nextPage = () => {
    if (this.state.pageNumber === 1) {
      this.setState({
        pageNumber: this.state.pageNumber + 1,
      });
    }
  };

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
          <div className="pdf-container">
            <Document
              file="../Nisida_Azzalini_CV.pdf"
              onLoadSuccess={this.onPdfSuccessfullyLoaded}
              externalLinkTarget="_blank"
            >
              <Page pageNumber={this.state.pageNumber} key={`${this.state.pageNumber}_${this.state.scale}`}></Page>
            </Document>
            {this.state.isLoaded ? (
              <div className="pdf-footer">
                <div className="pdf-page-btns">
                  <div>
                    <Button
                      disabled={this.state.pageNumber <= 1}
                      onClick={this.previousPage}
                      outline
                      color="primary"
                      className="btn-size"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </Button>
                  </div>
                  <div className="num-of-pages">
                    <p>
                      {this.state.pageNumber ||
                        (this.state.numPages ? 1 : "--")}{" "}
                      / {this.state.numPages || "--"}
                    </p>
                  </div>
                  <div>
                    <Button
                      disabled={
                        this.state.pageNumber >= this.state.numberOfPages
                      }
                      onClick={this.nextPage}
                      outline
                      color="primary"
                      className="btn-size"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </Button>
                  </div>
                </div>
                <div className="pdf-download">
                  <a
                    href="../Nisida_Azzalini_CV.pdf"
                    download="Nisida_Azzalini_CV"
                  >
                    <FontAwesomeIcon icon={faFileDownload} />
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Skills;
