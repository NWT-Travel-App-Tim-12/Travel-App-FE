import { ButtonProps, Text } from "@chakra-ui/react";
import { Styled } from "./index.styled";
import { BsCart } from "react-icons/bs";

const CartButton = (props: ButtonProps) => {
  return (
    <Styled.Button {...props} backgroundColor={"yellow.400"}>
      <BsCart />
      <Text marginLeft={"0.5rem"}>Cart</Text>
    </Styled.Button>
  );
};

export default CartButton;
