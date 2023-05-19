import styled from "styled-components";
import { theme } from "@chakra-ui/react";
import Button from "../Button";

const StyledButton = styled(Button)`
  color: white;
  &:hover {
    color: ${theme.colors.yellow[400]};
    background-color: white;
    outline: 1px solid ${theme.colors.yellow[400]};
  }
`;

export const Styled = {
  Button: StyledButton,
};
