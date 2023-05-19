import { FormControl, InputGroup, theme } from "@chakra-ui/react";
import styled from "styled-components";

const StyledFormInput = styled(FormControl)`
  p {
    margin: 0;
    background-color: white;
    position: absolute;
    top: -8px;
    left: 10px;
    font-size: small;
    padding: 0 5px;
    z-index: 10;
    color: ${theme.colors.gray[400]};
  }
`;

export const Styled = { FormControlInput: StyledFormInput };
