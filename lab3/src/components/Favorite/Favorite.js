import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Favorite = () => {
  return (
    <>
      <Container fluid bg-secondary="true">
        <Container className="p-4 " style={{ minHeight: "500px" }}>
          <Row>
            <h1>Here Your Favorite</h1>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Favorite;
