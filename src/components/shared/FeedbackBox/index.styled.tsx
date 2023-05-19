import styled from "styled-components";
import { Box, theme } from "@chakra-ui/react";

const StyledBox = styled(Box)`
  height: 17rem;
  min-width: 25rem;
  width: 50%;
  max-width: 35rem;
  align-self: center;
  margin: auto;
  margin-top: 5rem;
  border-radius: 0.5rem;
  box-shadow: -2px 0px 25px 0px ${theme.colors.gray[400]};
`;

export const Styled = {
  Box: StyledBox,
};
