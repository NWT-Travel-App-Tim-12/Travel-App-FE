import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TravelImage from "../../../assets/svg/travel.svg";

const HomePage = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex
        padding={"10rem 15rem 5rem"}
        height={"92vh"}
        background={
          "linear-gradient(0deg, var(--chakra-colors-red-200), white)"
        }
      >
        <Heading
          as={"h1"}
          size={"4xl"}
          width={"25rem"}
          position={"absolute"}
          right={"45%"}
          top={"15rem"}
        >
          <Highlight
            query="explore"
            styles={{ px: "20px", py: "0px", rounded: "full", bg: "gray.200" }}
          >
            Join us and explore the world
          </Highlight>
        </Heading>
        <Image
          boxSize={"30rem"}
          src={TravelImage}
          position={"absolute"}
          left={"50%"}
        />
      </Flex>
      <Flex
        backgroundColor={"red.200"}
        padding={"2rem 0"}
        gap={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Card
          background={"red.700"}
          textAlign={"center"}
          color={"#fff"}
          variant={"elevated"}
        >
          <CardHeader>
            <Heading as={"h1"}>2000+</Heading>
            <Text>Destinations</Text>
          </CardHeader>
          <CardBody />
        </Card>

        <Card
          background={"red.700"}
          textAlign={"center"}
          color={"#fff"}
          variant={"elevated"}
        >
          <CardHeader>
            <Heading as={"h1"}>16800+</Heading>
            <Text>Satisfied clients</Text>
          </CardHeader>
          <CardBody />
        </Card>

        <Card
          background={"red.700"}
          textAlign={"center"}
          color={"#fff"}
          variant={"elevated"}
        >
          <CardHeader>
            <Heading as={"h1"}>15+</Heading>
            <Text>Years of experience</Text>
          </CardHeader>
          <CardBody />
        </Card>
      </Flex>
      <Flex
        width={"100%"}
        padding={"3rem 0"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading as={"h4"} size={"lg"} textAlign={"center"}>
          The best deals
        </Heading>
        <Flex gap={"1rem"} justifyContent={"center"}>
          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://youimg1.tripcdn.com/target/100b0q000000gbkis0B7E_C_670_376_Q70.webp?proc=source%2ftrip&proc=source%2ftrip"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">The Grand Palace</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  corrupti labore vitae sed repellendus nobis.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="red">
                  Book now
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Purchase
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://youimg1.tripcdn.com/target/100b0q000000gbkis0B7E_C_670_376_Q70.webp?proc=source%2ftrip&proc=source%2ftrip"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">The Grand Palace</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  corrupti labore vitae sed repellendus nobis.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="red">
                  Book now
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Purchase
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://youimg1.tripcdn.com/target/100b0q000000gbkis0B7E_C_670_376_Q70.webp?proc=source%2ftrip&proc=source%2ftrip"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">The Grand Palace</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  corrupti labore vitae sed repellendus nobis.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="red">
                  Book now
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Purchase
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
