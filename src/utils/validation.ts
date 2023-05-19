import * as Yup from "yup";

const commonValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

export const signUpValidationSchema = Yup.object()
  .shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  })
  .concat(commonValidationSchema);

export const logInValidationSchema = Yup.object()
  .shape({})
  .concat(commonValidationSchema);
