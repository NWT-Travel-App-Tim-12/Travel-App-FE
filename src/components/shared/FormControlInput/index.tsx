import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Text,
  theme,
} from "@chakra-ui/react";
import Input from "../Input";
import { Styled } from "./index.styled";
import { FormControlInputProps } from "./interfaces";

const FormControlInput = (props: FormControlInputProps) => {
  const color = props.isInvalid ? "red !important" : "gray.400 !important";

  return (
    <Styled.FormControlInput isInvalid={props.isInvalid}>
      <Text color={color}>{props.label}</Text>
      <Input page="login" {...props} />
      <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
    </Styled.FormControlInput>
  );
};

export default FormControlInput;
