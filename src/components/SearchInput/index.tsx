import Input from "../shared/Input";
import { Styled } from "./index.styled";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroupProps, theme } from "@chakra-ui/react";

const SearchInput = (props: InputGroupProps) => {
  return (
    <Styled.InputGroup {...props}>
      <SearchIcon color={theme.colors.gray[400]} />
      <Input {...props} placeholder="Search items..." />
    </Styled.InputGroup>
  );
};

export default SearchInput;
