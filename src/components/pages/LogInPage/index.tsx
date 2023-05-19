import { Styled } from "./index.styled";
import { Alert, AlertIcon, Box, Heading, Stack } from "@chakra-ui/react";
import SignUpButton from "../../shared/SignUpButton";
import LogInButton from "../../shared/LogInButton";
import { useNavigate } from "react-router";
import FormControlInput from "../../shared/FormControlInput";
import { useDefaultFormik } from "../../../hooks/formik";
import FeedbackBox from "../../shared/FeedbackBox";
import { logInValidationSchema } from "../../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../redux/interfaces";
import { logIn } from "../../../redux/reducers/user/reducer";
import { ThunkDispatch } from "redux-thunk";
import { useEffect } from "react";

const LogInPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userStore = useSelector((state: ReduxStore) => state.user);
  const formik = useDefaultFormik(initialValues, logInValidationSchema);

  const { email, password } = formik.values;

  const onClick = async () => {
    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  return userStore.isUserLoggedIn ? (
    <FeedbackBox message="You have successfully logged in!" />
  ) : (
    <Styled.Container>
      <Stack spacing={"1.8rem"}>
        <Heading size={"md"} textAlign={"center"} color={"gray.600"}>
          Login
        </Heading>
        <FormControlInput
          name="email"
          type="email"
          label="Username or email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={formik.handleChange}
          isInvalid={formik.touched.email && !!formik.errors.email}
          errorMessage={formik.errors.email as string}
          onBlur={formik.handleBlur}
        />
        <FormControlInput
          name="password"
          type="password"
          label="Password"
          placeholder="yourPassword123"
          value={password}
          onChange={formik.handleChange}
          isInvalid={formik.touched.password && !!formik.errors.password}
          errorMessage={formik.errors.password as string}
          onBlur={formik.handleBlur}
        />
        {userStore.error && (
          <Alert status="error">
            <AlertIcon />
            {userStore.error}
          </Alert>
        )}
        <LogInButton
          onClick={onClick}
          isDisabled={!!Object.keys(formik.errors).length}
        />
        <Box width={"100%"}>
          <Heading
            size={"sm"}
            textAlign={"center"}
            marginBottom={"1.5rem"}
            color={"gray.600"}
          >
            or
          </Heading>
          <SignUpButton width={"100%"} onClick={() => navigate("/signup")} />
        </Box>
      </Stack>
    </Styled.Container>
  );
};

export default LogInPage;
