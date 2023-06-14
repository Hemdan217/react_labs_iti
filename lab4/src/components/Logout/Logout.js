import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { authContext } from "../../contextAPI/context.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const Logout = () => {
  const { auth, changeAuth } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <>
      <Container className="w-50 m-5 mx-auto">
        <Button
          variant="primary"
          onClick={() => {
            changeAuth();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Logout;
