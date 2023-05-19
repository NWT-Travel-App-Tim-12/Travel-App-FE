import { useEffect, useState } from "react";
import { mockBookingCategories, mockBookings } from "../../../mock/data";
import { debounce } from "lodash";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import SearchInput from "../../SearchInput";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore } from "../../../redux/interfaces";
import { getItemList } from "../../../redux/reducers/item/reducer";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Booking } from "../../../models/Booking";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [category, setCategory] = useState("");

  const [user, cart] = useSelector((state: ReduxStore) => {
    return [state.user, state.cart];
  });

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getItemList({ page: 1, pageSize: 20 }));
    setBookings(mockBookings);
  }, []);

  useEffect(() => {
    setBookings(
      category !== "Paid"
        ? mockBookings.filter((item) => item.id === category)
        : mockBookings
    );
  }, [category]);

  const debounceSearch = debounce((value: string) => {
    const results = (
      category !== "Paid"
        ? mockBookings.filter((item) => item.id === category)
        : mockBookings
    ).filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setBookings(results);
  }, 700);

  const handleSearchChange = (event: any) => {
    const value = event.target.value;
    debounceSearch(value);
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"5rem 10rem"}
    >
      <Flex
        marginBottom={"2rem"}
        width={"100%"}
        gap={"1rem"}
        justifyContent={"center"}
      >
        <SearchInput width={"100%"} onChange={handleSearchChange} />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Category
          </MenuButton>

          <MenuList>
            {mockBookingCategories.map((item) => (
              <MenuItem onClick={() => setCategory(item.name)} key={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>

      <Flex gap={"1rem"} flexWrap={"wrap"}>
        {bookings.map((item) => (
          <Card key={item.id} maxW="xs" minW={"xxs"} flex={1}>
            <CardBody>
              <Image
                src={item.url}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>

                <Text>{item.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${item.cost}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Book now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Reserve
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default BookingPage;
