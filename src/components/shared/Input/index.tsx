import React from "react";
import { Styled } from "./index.styled";
import { InputProps, theme } from "@chakra-ui/react";
import { CustomInputProps } from "./interfaces";

const Input = (props: CustomInputProps) => {
  const { page } = props;
  return (
    <Styled.StyledInput
      _placeholder={{ color: theme.colors.gray[400] }}
      {...props}
    ></Styled.StyledInput>
  );
};

export default Input;
