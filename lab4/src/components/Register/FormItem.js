import React from "react";

const FormItem = (props) => {
  return (
    <>
      <div className="form-group mb-3">
        <label htmlFor={props.item}>{props.item}</label>
        <input
          className="form-control"
          id={props.item}
          name={props.item}
          type={props.type}
          onChange={props.formik.handleChange}
          value={props.formik.values[props.item]}
        />
        <span className="text-danger">{props.formik.errors[props.item]}</span>
      </div>
    </>
  );
};

export default FormItem;
