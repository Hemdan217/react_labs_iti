export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/\w{2,}@\w{4,}.(com|net)/g.test(values.email)) {
    errors.email =
      "Please Make Sure To Enter Valid Email like hemdan@gmail.com";
  }

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.userName) {
    errors.userName = "Required";
  } else if (/\s/i.test(values.userName)) {
    errors.userName =
      "Please Make Sure To Enter Valid User Name Without Spaces";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (!/[A-Z]{1,}[a-z]{1,}\W{1,}\d{4,}/i.test(values.password)) {
    errors.password =
      "Please Make Sure To Enter Valid Password Like This He@2131998";
  }
  if (values.password != values.confirmpassword) {
    errors.confirmpassword =
      "Please Make Sure That Password, Confirm Password Is Matched";
  }

  return errors;
};
