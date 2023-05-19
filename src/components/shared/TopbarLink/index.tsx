import React from "react";
import { Styled } from "./index.styled";
import { LinkProps } from "@chakra-ui/react";

const TopbarLink = (props: any) => {
  return <Styled.Link {...props}>{props.children}</Styled.Link>;
};

export default TopbarLink;
