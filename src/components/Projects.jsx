import React from "react";
import "./Projects.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        <h1 className="title ml-2 mb-4">Projects</h1>
        <Row className="m-0">
          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle>My Recipe Book</CardTitle>
              </CardBody>
              <CardImg src="/images/recipe-book.jpg" alt="Recipe Book" />
              <CardBody>
                <CardText>
                  A Web Application to manage your favourite recipes and browse
                  the public recipes of other users. I enjoyed a lot writing
                  this web application as my personal project at Enspiral Dev
                  Academy.I also enjoyed making a couple of videos to explain
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=NcoKnBe5KOs"
                  >
                    {" "}
                    how it works
                  </a>
                  , and{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/embed/ahCB_8OARCI?autoplay=1"
                  >
                    {" "}
                    how it is built
                  </a>
                  .
                </CardText>
                <CardLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/nisidazza/myRecipesBookReact"
                >
                  Source Code
                </CardLink>
                <CardLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://nisida-book-recipes-react.herokuapp.com/#/"
                >
                  My Recipe Book Webpage
                </CardLink>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle>Personal Blog</CardTitle>
              </CardBody>
              <CardImg src="/images/personal-blog.jpg" alt="Personal Blog" />
              <CardBody>
                <CardText>
                  My first Personal Blog hosted on GitHub pages and built during
                  Enspiral DevAcademy Foundation. Follow the beginning of my
                  journey to becoming a Web Developer while I was getting
                  familiar with the basics: HTML, CSS and a bit of JavaScript.
                </CardText>
                <CardLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://nisidazza.github.io/"
                >
                  Personal Blog Webpage
                </CardLink>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle>Gender Dashboard</CardTitle>
              </CardBody>
              <CardImg
                src="/images/gender-dashboard-nz.jpg"
                alt="Gender Dashboard"
              />
              <CardBody>
                <CardText>
                  The project consisted in designing and developing the MVP
                  stage of the Gender Dashboard web page. It is part of a
                  pre-existent website, based on WordPress. I was teamed up with
                  another Developer and a Chief Storyteller; most of the work
                  was done remotely, with daily catch ups on Slack.
                </CardText>
                <CardLink
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://genderequal.nz/datastories/"
                >
                  Gender Dashboard Webpage
                </CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
