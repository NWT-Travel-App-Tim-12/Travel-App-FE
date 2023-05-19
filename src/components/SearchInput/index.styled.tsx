import { Box, InputGroup, theme } from "@chakra-ui/react";
import styled from "styled-components";

const StyledInputGroup = styled(InputGroup)`
  border: 1px solid ${theme.colors.gray[300]};
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  width: 50% !important;
  align-items: center;
  input {
    border: none !important;
  }
`;

export const Styled = {
  InputGroup: StyledInputGroup,
};
