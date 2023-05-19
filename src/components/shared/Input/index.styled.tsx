import styled from "styled-components";
import { Box, Input, theme } from "@chakra-ui/react";

const StyledInput = styled(Input)`
  outline: none !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export const Styled = { StyledInput };
