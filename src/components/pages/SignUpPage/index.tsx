import { Alert, AlertIcon, Heading, Stack } from "@chakra-ui/react";
import { Styled } from "../LogInPage/index.styled";
import SignUpButton from "../../shared/SignUpButton";
import FormControlInput from "../../shared/FormControlInput";
import { useDefaultFormik } from "../../../hooks/formik";
import FeedbackBox from "../../shared/FeedbackBox";
import { signUpValidationSchema } from "../../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../redux/interfaces";
import { ThunkDispatch } from "redux-thunk";
import { signUp } from "../../../redux/reducers/user/reducer";
import { useEffect } from "react";

const SignUpPage = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userStore = useSelector((state: ReduxStore) => state.user);
  const formik = useDefaultFormik(initialValues, signUpValidationSchema);

  const { firstName, lastName, email, password } = formik.values;

  const onClick = async () => {
    dispatch(signUp({ firstName, lastName, email, password }));
  };

  return userStore.isUserLoggedIn ? (
    <FeedbackBox message="You have successfully registered!" />
  ) : (
    <Styled.Container>
      <Stack spacing={"1.8rem"}>
        <Heading size={"md"} textAlign={"center"} color={"gray.600"}>
          Sign Up
        </Heading>
        <FormControlInput
          placeholder="Your first name"
          value={firstName}
          label="First name"
          name="firstName"
          type="text"
          isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          errorMessage={formik.errors.firstName as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControlInput
          label="Last name"
          name="lastName"
          type="text"
          placeholder="Your last name"
          value={lastName}
          isInvalid={formik.touched.lastName && !!formik.errors.lastName}
          errorMessage={formik.errors.lastName as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControlInput
          name="email"
          type="email"
          label="Email"
          placeholder="abc@gmail.com"
          value={email}
          isInvalid={formik.touched.email && !!formik.errors.email}
          errorMessage={formik.errors.email as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControlInput
          name="password"
          type="password"
          label="Password"
          placeholder="yourPassword123"
          value={password}
          isInvalid={formik.touched.password && !!formik.errors.password}
          errorMessage={formik.errors.password as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {userStore.error && (
          <Alert status="error">
            <AlertIcon />
            {userStore.error}
          </Alert>
        )}
        <SignUpButton
          width={"100%"}
          onClick={onClick}
          isDisabled={!!Object.keys(formik.errors).length}
        />
      </Stack>
    </Styled.Container>
  );
};

export default SignUpPage;
