import React from "react";
import { Styled } from "./index.styled";
import { CustomButtonProps } from "./interfaces";
import { ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  return <Styled.Button {...props}>{props.children}</Styled.Button>;
};

export default Button;
