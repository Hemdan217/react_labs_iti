import React from "react";
import { useFormik } from "formik";
import Container from "react-bootstrap/Container";
import { validate } from "./validate.js";
import FormItem from "./FormItem.js";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      userName: "",
      password: "",
      confirmpassword: "",
    },

    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const types = ["email", "text", "text", "password", "password"];
  return (
    <>
      <Container className="w-50 m-5 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          {Object.keys(formik.initialValues).map((item, index) => {
            return (
              <FormItem
                type={types[index]}
                item={item}
                formik={formik}
                key={index}
              />
            );
          })}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </>
  );
};

export default Register;
