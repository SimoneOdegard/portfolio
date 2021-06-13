/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import busmall from "assets/img/simone/busmall.png";
import recipeRoulette from "assets/img/simone/recipeRoulette.png";
import peace from "assets/img/simone/peace.JPG";
import genreRoom from "assets/img/simone/genreRoom.png";
import resty from "assets/img/simone/resty.png";
import storeFront from "assets/img/simone/storeFront.png";
import cityExplorer from "assets/img/simone/cityExplorer.png";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import bottomcb from "assets/img/simone/bottomcb.jpg";
import leaf from "assets/img/simone/leaf.jpg";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default alpha-4">
                <img 
                src={leaf}
                width={2400}
                // className="shape shape-style-1 shape-default alpha-4"
                />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-default">
                        Coding With Aloha{" "}
                      </h1>
                      <p className="lead text-default">
                        Listening, Inclusion, Project execution: I love helping and working with others. It's a great feeling to achieve greatness together.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                  <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                          <img src={storeFront} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Store Front
                          </h6>
                          <p className="description mt-3">
                            A display of cards that the user can choose to display animals based on how many horns they have.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              SCSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MongoDB
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Cors
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://loving-kirch-445281.netlify.app/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                          <img src={resty} width={275}/>
                          <h6 className="text-success text-uppercase">
                            RESTy
                          </h6>
                          <p className="description mt-3">
                            RESTy is a swagger.io clone. It allows you to use GET, POST, PUT, DELETE to test your APIs.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MongoDB
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Cors
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://kind-ritchie-1fc32f.netlify.app/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                          <img src={genreRoom} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Genre Room
                          </h6>
                          <p className="description mt-3">
                            A MERN stack application where users are recommended a random movie. Either fully randomized or randomized by genre.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MongoDB
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Axios
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Cors
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://clever-ardinghelli-fdb608.netlify.app/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                          <img src={cityExplorer} width={275}/>
                          <h6 className="text-success text-uppercase">
                            City Explorer
                          </h6>
                          <p className="description mt-3">
                            A city search app that displays the map of the location, weather for the up coming 10 days, and movies about that city.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Cors
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://modest-borg-215dd1.netlify.app/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="shadow border-0">
                        <CardBody className="py-5">
                          <img src={recipeRoulette} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Recipe Roulette
                          </h6>
                          <p className="description mt-3">
                            A random meal recipe generator app that provides the user with an image, meal recipe, and nutrition facts.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://oakfive.github.io/recipe-roulette/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className=" shadow border-0">
                        <CardBody className="py-5">
                          <img src={busmall} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            Random images are generated for the user to vote on. After voting, the user can see their favorites displayed in a chart.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://simoneodegard.github.io/BusMall/"
                            target="blank"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={genreRoom}
                    width={600}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Genre Room</h3>
                    <p>
                      Genre Room is a MERN stack application with Auth. We had a vision of building an app that would solve the common question of, "what will we watch tonight?" We wanted to randomly generate a movie that is completely randomized or can be generated by genre. Recommendations are pulled from MovieDB API.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">
                              A cure for the indecisive movie watcher
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">Multiple genres to choose from</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">
                              Pulls from MovieDB API
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-success shadow border-0">
                    <CardImg
                      alt="..."
                      src={peace}
                      top
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-heart" />
                    </div>
                    <h3>About Me</h3>
                    <p className="lead">
                      Software Developer based in
                      <br/>
                      the Greater Seattle Area
                    </p>
                    <p>
                    Hi, I’m Simone Odegard. I’m a full stack JavaScript developer and I lead competitive dance teams. I believe that if you work hard, you will be successful even if you sometimes feel incapable. I want to inspire other young women to follow their dreams and be confident in their ability to succeed in tech.
                    </p>
                    <p>
                    As a dance coach, I have been responsible for creating award winning teams. I love working with people and I love helping them grow. It’s an amazing feeling when you’re able to achieve greatness, and even better when you can achieve that together. I want to join a work environment where others are passionate about their career, value growth, and where creativity is embraced. What I add to any team is positivity, encouragement, and hard work. Thank you for your time.
                    </p>
                    <a
                      className="font-weight-bold text-success mt-5"
                      href="https://www.linkedin.com/in/simoneodegard/"
                      target="blank"
                    >
                      Let's stay connected!
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
