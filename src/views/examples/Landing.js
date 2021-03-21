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
import aboutme from "assets/img/simone/aboutme.png";
import busmall from "assets/img/simone/busmall.png";
import cookiestand from "assets/img/simone/cookiestand.png";
import recipeRoulette from "assets/img/simone/recipeRoulette.png";
import horns from "assets/img/simone/horns.png";
import peace from "assets/img/simone/peace.JPG";

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
                        I love helping and working with others. Problem solving together until we have that light bulb moment is the best! Always done with a positive attitude.
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
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={horns} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Gallery of Horns
                          </h6>
                          <p className="description mt-3">
                            A display of cards that the user can choose to display animals based on how many horns they have.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://eloquent-noyce-7b0c53.netlify.app/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={recipeRoulette} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Recipe Roulette
                          </h6>
                          <p className="description mt-3">
                            A meal recipe generator app that allows the user to pick between four categories. A random meal will appear on the screen which will include a picture, the recipe, ingredients, and nutrition facts.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://oakfive.github.io/recipe-roulette/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
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
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="simoneodegard.github.io/busmall/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={cookiestand} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            A sales prediction app where users can input their own store values to see how many sales they could potentially make per hour.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://simoneodegard.github.io/cookie-stand/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={aboutme} width={275}/>
                          <h6 className="text-success text-uppercase">
                            About Me
                          </h6>
                          <p className="description mt-3">
                            One of my first times using JavaScript. A guessing game to learn about me. Includes a number guessing game and a favorite fruit guessing game.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="simoneodegard.github.io/about-me/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={horns} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Placeholder Title 1
                          </h6>
                          <p className="description mt-3">
                            Placeholder
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://eloquent-noyce-7b0c53.netlify.app/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={horns} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Placeholder title 2
                          </h6>
                          <p className="description mt-3">
                            Placeholder
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://eloquent-noyce-7b0c53.netlify.app/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={horns} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Placeholder title 3
                          </h6>
                          <p className="description mt-3">
                            Placeholder
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://eloquent-noyce-7b0c53.netlify.app/"
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <img src={horns} width={275}/>
                          <h6 className="text-success text-uppercase">
                            Placeholder title 4
                          </h6>
                          <p className="description mt-3">
                            Placeholder
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              REACT
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://eloquent-noyce-7b0c53.netlify.app/"
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
                    src={recipeRoulette}
                    width={600}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Recipe Roulette</h3>
                    <p>
                      Recipe Roulette was our final week long project for 201. We had a vision of building an app that would solve the common question of, "What do you want to eat tonight?" We wanted to randomly generate meal options which would include a picture, ingredients, the recipe, and nutrition facts.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">
                              A cure for the indecisive eater
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">Multiple meal categories to choose from</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="font-weight-bold text-success mt-1">
                              Light and dark mode
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
                      Softward Developer based in
                      <br/>
                      the Greater Seattle Area
                    </p>
                    <p>
                    I am a software developer and dance coach. I am a strong, driven woman, who wants to change the image of tech. I know it is a male dominated industry and I want to show others, who are like me, that they can be successful in tech too. I am proficient in human relations and I will thrive in an environment where myself and others are always growing. With my background as a coach, I will bring positivity, encouragement, competitiveness, and accountability to any role in tech.
                    </p>
                    <a
                      className="font-weight-bold text-success mt-5"
                      href="https://www.linkedin.com/in/simoneodegard/"
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
