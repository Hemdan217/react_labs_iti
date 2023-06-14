import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PortfiloItem from "./PortfiloItem.js";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
let imges = [
  "p1 (1).jpg",
  "p1 (2).jpg",
  "p1 (3).jpg",
  "p1 (4).jpg",
  "p1 (5).jpg",
  "p1 (6).jpg",
];

const Portfilo = () => {
  console.log(imges);
  return (
    <>
      <Container fluid bg-white="true" id="portfolio">
        <Container className="p-4">
          <h1>Portfilo</h1>

          <Row>
            {imges.map((img) => {
              return <PortfiloItem img={img} key={img} />;
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Portfilo;
