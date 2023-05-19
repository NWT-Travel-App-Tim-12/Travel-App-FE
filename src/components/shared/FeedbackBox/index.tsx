import React from "react";
import { FeedbackBoxProps } from "./interfaces";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Styled } from "./index.styled";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Button from "../Button";
import { useNavigate } from "react-router";

const FeedbackBox = (props: FeedbackBoxProps) => {
  const navigate = useNavigate();
  return (
    <Styled.Box>
      <Flex
        backgroundColor={"green.400"}
        width={"100%"}
        height={"60%"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        borderRadius={"0.5rem 0.5rem 0 0"}
      >
        <CheckCircleIcon color={"#fff"} marginBottom={"1rem"} boxSize={8} />
        <Heading color={"#fff"} size={"md"}>
          {props.message}
        </Heading>
      </Flex>
      <Flex height={"40%"} borderRadius={"inherit"}>
        <Button
          backgroundColor={"green.400"}
          margin={"auto"}
          onClick={() => navigate("/")}
        >
          Go to Home page
        </Button>
      </Flex>
    </Styled.Box>
  );
};

export default FeedbackBox;
