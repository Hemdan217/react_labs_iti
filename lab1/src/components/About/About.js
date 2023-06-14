import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <Container fluid bg-white="true" id="about">
        <Container className="p-4">
          <Row>
            <Col className="p-4" lg="6" md="12">
              <Row>
                <Col className="p-4" lg="4" md="12">
                  <h1 className="display-1 pl-4">15</h1>
                  <h2 className="display-2 pl-4">YEARS</h2>
                </Col>

                <Col className="p-4" lg="8" md="12">
                  <h3
                    style={{ padding: "17px", marginLeft: "-104px" }}
                    className=" pl-4  mx-auto"
                  >
                    of working experience as a web designer & developer
                  </h3>
                </Col>
              </Row>
              <Row className="p-4 ml-2">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </Row>
              <Button style={{ background: "#553BAB", margin: "10px" }}>
                Read More
              </Button>
            </Col>
            <Col lg="6" md="12">
              {[1, 2, 3, 4].map((i) => {
                return (
                  <img
                    key={i}
                    src={`./img/about${i}.jpg`}
                    alt=""
                    className="img-fluid rounded-top w-50"
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;
