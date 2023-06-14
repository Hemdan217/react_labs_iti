import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "./../../contextAPI/context.js";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const { auth, changeAuth } = useContext(authContext);
  const handleChange = (evt) => {
    let newValue = evt.target.value;
    setUser({ ...user, [evt.target.name]: newValue });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    changeAuth();
    navigate("/logout");
  };

  return (
    <>
      <Container className="w-50 m-5 mx-auto">
        <Form onSubmit={(evt) => handleSubmit(evt)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={type}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(evt) => {
                handleChange(evt);
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <span
              className="btn btn-primary"
              onClick={() => {
                const newValue = type == "password" ? "text" : "password";
                setType(newValue);
              }}
            >
              {type == "password" ? "show" : "hide"}
            </span>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
