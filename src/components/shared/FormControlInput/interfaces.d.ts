import {
  FormControlProps,
  FormErrorMessageProps,
  InputProps,
} from "@chakra-ui/react";

export interface FormControlInputProps
  extends FormControlProps,
    InputProps,
    FormErrorMessageProps {
  errorMessage?: string;
}
