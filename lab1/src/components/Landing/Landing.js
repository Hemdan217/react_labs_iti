import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <Container fluid bg-secondary="true" className={`${styles.landing__top}`}>
        <Container className="p-4">
          <Row>
            <Col className="p-4" lg="6" md="12">
              <h3 className="m-4">I am</h3>
              <h1 className="p-4">Hemdan Khalifa</h1>
              <h2 className="p-4">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("MEA|RN Stack Developer.....")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Welcomes You...")
                      .start();
                  }}
                />
              </h2>
              <p className="p-2  m-4">
                I am an enthusiastic Engineer with strong will, big dreams, and
                a wide vision. I am so proud of being self-learning.so my main
                career goal is to learn every day. I have a great passion for
                Computer and technology, I work hard to get more and more
                knowledge in this field.
              </p>

              <a
                href="./Hemdan.pdf"
                className="text-decoration-none btn btn-primary m-4"
              >
                DownLoad CV
              </a>
            </Col>
            <Col lg="6" md="12">
              <img
                src="./img/1.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Landing;
