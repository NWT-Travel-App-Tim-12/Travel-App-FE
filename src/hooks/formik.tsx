import { useFormik } from "formik";
import { User } from "../models/User";

export const useDefaultFormik = (
  initialValues: User,
  validationSchema: Object
) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => {},
  });

  return formik;
};
