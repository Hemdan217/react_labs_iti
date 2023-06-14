import React from "react";
import Col from "react-bootstrap/Col";

const PortfiloItem = (props) => {
  return (
    <>
      <Col lg="4" md="6" className="pb-2">
        <img
          src={`img/${props.img}`}
          className="img-fluid rounded-top"
          alt=""
        />
      </Col>
    </>
  );
};

export default PortfiloItem;
