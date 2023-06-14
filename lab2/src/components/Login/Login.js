import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: null,
    passwordError: null,
  });
  const [type, setType] = useState("password");
  const [hidden, setHidden] = useState(true);

  const handleChange = (evt) => {
    let newValue = evt.target.value;
    let ErrorMessage;
    setUser({ ...user, [evt.target.name]: newValue });
    switch (evt.target.name) {
      case "email":
        ErrorMessage = !newValue.length
          ? "This Is Required"
          : !/\w{2,}@\w{4,}.(com|net)/g.test(newValue)
          ? "Please Make Sure To Enter Valid Email like hemdan@gmail.com"
          : "";

        setErrors({ ...errors, emailError: ErrorMessage });
        break;
      case "password":
        ErrorMessage = !newValue.length
          ? "This Is Required"
          : newValue.length < 8 && newValue.length
          ? "You Password Should At Least 8 Characters"
          : "";

        setErrors({ ...errors, passwordError: ErrorMessage });
        break;
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
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

            <Form.Text className=" text-danger">{errors.emailError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={`${hidden} ? password : text`}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(evt) => {
                handleChange(evt);
              }}
            ></Form.Control>

            <Form.Text className=" text-danger">
              {errors.passwordError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <span
              className="btn btn-primary"
              onClick={() => {
                const newValue = type == "password" ? "text" : "password";
                setType(newValue);
                setHidden(!hidden);
              }}
            >
              {type == "password" ? "show" : "hide"}
            </span>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!(errors.passwordError == "" && errors.emailError == "")}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
