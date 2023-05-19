import Button from "../Button";
import { ButtonProps, theme } from "@chakra-ui/react";
import { Styled } from "./index.styled";

const LogInButton = (props: ButtonProps) => {
  return (
    <Styled.Button {...props} backgroundColor={"blue.400"}>
      Log In
    </Styled.Button>
  );
};

export default LogInButton;
