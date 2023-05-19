import { ButtonProps } from "@chakra-ui/react";
import { Styled } from "./index.styled";

const SignUpButton = (props: ButtonProps) => {
  return (
    <Styled.Button {...props} backgroundColor={"green.400"}>
      Sign Up
    </Styled.Button>
  );
};

export default SignUpButton;
