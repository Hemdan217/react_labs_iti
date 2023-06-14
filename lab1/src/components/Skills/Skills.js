import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem.js";

export default function Skills() {
  const skills = [
    { name: "HTML", progress: 90 },
    { name: "Css", progress: 80 },
    { name: "Js", progress: 99 },
    { name: "React", progress: 75 },
    { name: "Node Js", progress: 85 },
    { name: "TypeScript", progress: 85 },
    { name: "Bootstarp", progress: 80 },
    { name: "Angular", progress: 85 },
  ];
  return (
    <>
      <Container
        id="skills"
        fluid
        bg-secondary="true"
        className={`${styles.landing__top}`}
        style={{ backgroundImage: 'url("./public/img/bg-header.png")' }}
      >
        <Container className="p-4">
          <Row>
            <Col className="p-4">
              <Row>
                <h1>Skills & Experience</h1>
                <p>
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum clita dolor duo clita
                  sit.
                </p>
                <h2>My Skills</h2>
              </Row>
              <Row>
                {skills.map((skill) => {
                  return (
                    <Col lg="6" md="12" key={skill.name}>
                      <SkillItem skill={skill} key={skill.name} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
