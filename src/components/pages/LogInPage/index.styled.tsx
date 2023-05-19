import { Container, theme } from "@chakra-ui/react";
import styled from "styled-components";

const StyledLogInPage = styled(Container)`
  background-color: #ffffff;
  padding: 1rem !important;
  width: fit-content;
  margin: auto;
  box-shadow: -2px 0px 25px 0px ${theme.colors.gray[400]};
  margin-top: 5rem;
  div {
    border-radius: 0.5rem;
  }
`;
export const Styled = { Container: StyledLogInPage };
