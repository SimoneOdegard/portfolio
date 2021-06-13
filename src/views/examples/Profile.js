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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import headshot from "assets/img/simone/headshot.JPG";
import leaf from "assets/img/simone/leaf.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div>
              <img 
              src={leaf}
              width={2400}
              // className="shape shape-style-1 shape-default alpha-4"
              />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="https://www.linkedin.com/in/simoneodegard/">
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={headshot}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="success"
                          href="https://www.linkedin.com/in/simoneodegard/"
                          size="sm"
                        >
                          Connect on LinkedIn
                        </Button>
                        {/* <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button> */}
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">300+</span>
                          <span className="description">Followers</span>
                        </div>
                        <div>
                          <span className="heading">5</span>
                          <span className="description">Projects</span>
                        </div>
                        {/* <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Simone Odegard{" "}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Greater Seattle Area, Washington
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer
                    </div>
                    <br />
                    <div>
                      <i className="ni education_hat mr-2" />
                      Code Fellows 2021<br></br>
                      University of Washington 2012
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Hi, I’m Simone Odegard. I’m a full stack JavaScript developer and I lead competitive dance teams. I believe that if you work hard, you will be successful even if you sometimes feel incapable. I want to inspire other young women to follow their dreams and be confident in their ability to succeed in tech.
                        </p>
                        <p>
                        As a dance coach, I have been responsible for creating award winning teams. I love working with people and I love helping them grow. It’s an amazing feeling when you’re able to achieve greatness, and even better when you can achieve that together. I want to join a work environment where others are passionate about their career, value growth, and where creativity is embraced. What I add to any team is positivity, encouragement, and hard work. Thank you for your time.
                        </p>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
