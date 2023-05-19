import styled from "styled-components";
import { Flex, theme } from "@chakra-ui/react";

const StyledTopBar = styled(Flex)`
  background-color: white;
  padding: 8px 16px;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[400]};
`;
export const Styled = { TopBar: StyledTopBar };
