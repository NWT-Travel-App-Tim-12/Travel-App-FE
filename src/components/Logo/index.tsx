import { ChatIcon } from "@chakra-ui/icons";
import { Link, Text, theme } from "@chakra-ui/react";
import { Styled } from "./index.styled";
import { SiYourtraveldottv } from "react-icons/si";

const Logo = () => {
  return (
    <Styled.Logo>
      <SiYourtraveldottv color={theme.colors.gray[400]} />
      <Text paddingLeft={"16px"} color={theme.colors.gray[600]}>
        <Link href="/">Travel App</Link>
      </Text>
    </Styled.Logo>
  );
};

export default Logo;
