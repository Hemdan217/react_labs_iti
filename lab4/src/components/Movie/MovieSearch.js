import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const MovieSearch = (props) => {
  return (
    <>
      <Row>
        <Col lg="3" md="4" sm="6" className="mx-auto m-4">
          <Form.Control
            type="search"
            placeholder="Enter Your Search"
            onChange={(evt) => {
              console.log(evt.target.value);
              props.onSearch(evt.target.value);
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default MovieSearch;
